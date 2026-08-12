'use client'

import ContainerLayout from '@/layouts/ContainerLayout'
import React, { useState, useRef, useEffect } from 'react'
import { Instagram } from 'lucide-react'
import Link from 'next/link'

const VideoCard = ({
  src,
  iglink,
  index,
  activeIndex,
  setActiveIndex
}: {
  src: string
  iglink: string
  index: number
  activeIndex: number | null
  setActiveIndex: (index: number | null) => void
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

    if (isFocused) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
      if (videoRef.current) {
        videoRef.current.currentTime = 0
      }
    }
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
        <div className="absolute bottom-6 right-6">
          <span className="text-white text-lg font-medium drop-shadow-md">Click To Play!</span>
        </div>
      </div>

      <Link
        href={iglink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleIconClick}
        className="absolute bottom-4 left-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-[#E1306C] shadow-lg backdrop-blur-sm transition-transform duration-300 hover:scale-110"
        aria-label="Open Instagram"
      >
        <Instagram className="h-5 w-5" />
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
  const tabs = Object.keys(tabVideos)

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
            />
          ))}
        </div>
      </div>
    </ContainerLayout>
  )
}

export default Videovault