'use client'

import ContainerLayout from '@/layouts/ContainerLayout'
import React, { useState, useRef, useEffect } from 'react'

const samplevideo = '/videos/sample-video-1.mp4'

const VideoCard = ({
  index,
  activeIndex,
  setActiveIndex
}: {
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
    // If already focused, toggle back to ambient (all autoplay)
    // If not focused, set this one as active (unmuted, others paused)
    if (isFocused) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <div
      className="relative aspect-3/4 h-full rounded-2xl overflow-hidden cursor-pointer group"
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={samplevideo}
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

const Videovault = () => {
  const [activeTab, setActiveTab] = useState('Product Explainers')
  const [activeIndex, setActiveIndex] = useState<number | null>(null) // null = all autoplay muted
  const tabs = ['Product Explainers', 'Durability Tests', 'Plumber Stories']

  return (
    <ContainerLayout>
      <div className="md:py-20">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`md:px-8 md:py-3 py-2 px-3 rounded-xl border transition-all duration-300 font-inter-tight text-xs md:text-lg ${activeTab === tab
                ? 'bg-[#323232] text-white border-[#323232]'
                : 'bg-white text-black border-[#E5E5E5] hover:border-gray-400'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }, (_, i) => (
            <VideoCard
              key={i}
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