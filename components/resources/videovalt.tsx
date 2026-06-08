'use client'

import ContainerLayout from '@/layouts/ContainerLayout'
import React, { useState, useRef, useEffect } from 'react'

const VideoCard = ({
  src,
  index,
  activeIndex,
  setActiveIndex
}: {
  src: string
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

  const handleClick = () => {
    if (isFocused) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
      if (videoRef.current) {
        videoRef.current.currentTime = 0
      }
    }
  }

  return (
    <div
      className="relative aspect-9/16 h-full rounded-2xl overflow-hidden cursor-pointer group"
      onClick={handleClick}
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
    </div>
  )
}

const tabVideos: Record<string, string[]> = {
  'Story Tellers': ['/videos/story/story1.mp4', '/videos/story/story2.mp4', '/videos/story/story3.mp4', '/videos/story/story4.mp4'],
  'Durability Tests': ['/videos/durabilityTest/test1.mp4', '/videos/durabilityTest/test2.mp4', '/videos/durabilityTest/test3.mp4', '/videos/durabilityTest/test4.mp4'],
  'Plumber Stories': ['/videos/plumberStories/plumber1.mp4', '/videos/plumberStories/plumber2.mp4', '/videos/plumberStories/plumber3.mp4', '/videos/plumberStories/plumber4.mp4'],
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
          {tabVideos[activeTab].map((src, i) => (
            <VideoCard
              key={`${activeTab}-${i}`}
              src={src}
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