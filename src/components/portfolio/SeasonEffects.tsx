'use client'

import React from 'react'
import { useTheme, THEME } from './theme'
import { cn } from './utils'

export function SeasonEffects() {
  const { theme } = useTheme()

  if (theme === THEME.rainy) return <Rain />
  if (theme === THEME.winter) return <Snow />
  if (theme === THEME.autumn) return <Leaves />
  if (theme === THEME.spring) return <Petals />
  if (theme === THEME.summer) return <SunGlow />

  return null
}

function Rain() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className="absolute h-5 w-[1px] bg-sky-300/60 animate-rain"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${0.5 + Math.random()}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}
function Snow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-white/80 animate-snow"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  )
}
function Leaves() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute text-orange-500 animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${12 + Math.random() * 20}px`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          🍂
        </div>
      ))}
    </div>
  )
}
function Petals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute text-pink-400 animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${12 + Math.random() * 16}px`,
            animationDuration: `${6 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  )
}
function SunGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-yellow-200/20 to-transparent animate-pulse" />
  )
}