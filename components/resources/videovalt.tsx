'use client'

import ContainerLayout from '@/layouts/ContainerLayout'
import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Instagram, X } from 'lucide-react'
import Link from 'next/link'

/* ─── Fullscreen Video Modal ─── */
const VideoModal = ({
  src,
  onClose
}: {
  src: string
  onClose: () => void
}) => {
  const modalVideoRef = useRef<HTMLVideoElement>(null)

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    // Prevent body scroll while modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  // Auto-play when modal opens
  useEffect(() => {
    if (modalVideoRef.current) {
      modalVideoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[10000] flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/25 hover:scale-110 cursor-pointer"
        aria-label="Close video"
      >
        <X className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Video container – responsive portrait */}
      <div
        className="relative w-[85vw] max-w-[420px] md:max-w-[480px] aspect-[9/14] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={modalVideoRef}
          src={src}
          className="w-full h-full object-cover"
          controls
          autoPlay
          playsInline
          loop
        />
      </div>
    </div>
  )
}

const VideoCard = ({
  src,
  iglink,
  index,
  activeIndex,
  setActiveIndex,
  onOpenModal
}: {
  src: string
  iglink: string
  index: number
  activeIndex: number | null
  setActiveIndex: (index: number | null) => void
  onOpenModal: (src: string) => void
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Determine states based on props
  const isFocused = activeIndex === index
  const isAmbient = activeIndex === null
  const shouldPlay = isFocused || isAmbient
  const isMuted = !isFocused // Muted unless focused

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted

      const playPromise = shouldPlay ? videoRef.current.play() : videoRef.current.pause()

      if (playPromise !== undefined && shouldPlay) {
        playPromise.catch(error => {
          console.error("Autoplay prevented:", error)
        })
      }
    }
  }, [shouldPlay, isMuted])

  const handleCardClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.defaultPrevented) return
    // Open the fullscreen modal on tap/click
    onOpenModal(src)
  }

  const handleIconClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation()
  }

  return (
    <div
      className="relative aspect-9/16 h-full rounded-2xl overflow-hidden cursor-pointer group block"
      onClick={handleCardClick}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        playsInline
        loop
      />

      {/* Overlay: Visible only when not focused (i.e. Ambient or Paused) */}
      <div className={`absolute inset-0 bg-black/20 pointer-events-none transition-opacity duration-300 ${isFocused ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute md:bottom-6 bottom-5 right-4 md:right-6">
          <span className="text-white text-lg font-medium drop-shadow-md">Click To Play!</span>
        </div>
      </div>

      <Link
        href={iglink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleIconClick}
        className="absolute bottom-4 left-4 z-10 flex h-8 w-8  md:h-10 md:w-10 items-center justify-center rounded-xl bg-white/90 text-[#E1306C] shadow-lg backdrop-blur-sm transition-transform duration-300 hover:scale-110"
        aria-label="Open Instagram"
      >
        <Instagram className="md:h-5 md:w-5 h-4 w-4" />
      </Link>
    </div>
  )
}
type VideoItem = {
  video: string;
  iglink: string;
};

const videoDetails: Record<string, VideoItem[]> = {
  "Story Tellers": [
    {
      video: "/videos/story/story1.mp4",
      iglink: "https://www.instagram.com/p/DLR3dY_v6Gy/",
    },
    {
      video: "/videos/story/story2.mp4",
      iglink: "https://www.instagram.com/p/DMKvi0ivU4p/",
    },
    {
      video: "/videos/story/story3.mp4",
      iglink: "https://www.instagram.com/p/DOlwKiGiM6O/",
    },
    {
      video: "/videos/story/story4.mp4",
      iglink: "https://www.instagram.com/p/DNdQjs5PjA-/",
    },
  ],

  "Durability Tests": [
    {
      video: "/videos/durabilityTest/test1.mp4",
      iglink: "",
    },
    {
      video: "/videos/durabilityTest/test2.mp4",
      iglink: "",
    },
    {
      video: "/videos/durabilityTest/test3.mp4",
      iglink: "",
    },
    {
      video: "/videos/durabilityTest/test4.mp4",
      iglink: "",
    },
  ],

  "Plumber Stories": [
    {
      video: "/videos/plumberStories/Plumber1.mp4",
      iglink: "",
    },
    {
      video: "/videos/plumberStories/Plumber2.mp4",
      iglink: "",
    },
    {
      video: "/videos/plumberStories/Plumber3.mp4",
      iglink: "",
    },
    {
      video: "/videos/plumberStories/Plumber4.mp4",
      iglink: "https://www.instagram.com/p/DPZIvtGiKHF/",
    },
  ],
};

const tabVideos: Record<string, VideoItem[]> = {
  'Story Tellers': videoDetails['Story Tellers'],
  'Durability Tests': videoDetails['Durability Tests'],
  'Plumber Stories': videoDetails['Plumber Stories'],
}

const Videovault = () => {
  const [activeTab, setActiveTab] = useState('Story Tellers')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [modalSrc, setModalSrc] = useState<string | null>(null)
  const tabs = Object.keys(tabVideos)

  const handleOpenModal = useCallback((src: string) => {
    setModalSrc(src)
  }, [])

  const handleCloseModal = useCallback(() => {
    setModalSrc(null)
  }, [])

  return (
    <ContainerLayout>
      <div className="py-10">
        <h1 className='font-medium text-xl md:text-[44px] tracking-tighter text-center font-hoves-pro mb-10 md:mb-5'>Video Vault</h1>
        <div className="flex justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setActiveIndex(null) }}
              className={`md:px-8 md:py-3 py-2 px-3 rounded-xl cursor-pointer border transition-all duration-300 font-inter-tight text-xs md:text-lg ${activeTab === tab
                ? 'bg-[#323232] text-white border-[#323232]'
                : 'bg-white text-black border-[#E5E5E5] hover:border-gray-400'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tabVideos[activeTab].map((item, i) => (
            <VideoCard
              key={`${activeTab}-${i}`}
              src={item.video}
              iglink={item.iglink}
              index={i}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {modalSrc && (
        <VideoModal src={modalSrc} onClose={handleCloseModal} />
      )}
    </ContainerLayout>
  )
}

export default Videovault