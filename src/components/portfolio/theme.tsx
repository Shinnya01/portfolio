'use client'

import React, { createContext, useContext, useMemo, useState } from 'react'

export type Season = 'auto' | 'spring' | 'summer' | 'rainy' | 'autumn' | 'winter'

export const SEASONS: Array<{ key: Season; label: string; emoji: string }> = [
  { key: 'auto', label: 'Auto', emoji: '🗓️' },
  { key: 'spring', label: 'Spring', emoji: '🌸' },
  { key: 'summer', label: 'Summer', emoji: '☀️' },
  { key: 'rainy', label: 'Rainy', emoji: '🌧️' },
  { key: 'autumn', label: 'Autumn', emoji: '🍂' },
  { key: 'winter', label: 'Winter', emoji: '❄️' },
]

function monthToSeason(monthIndex0: number): Exclude<Season, 'auto'> {
  if ([11, 0, 1].includes(monthIndex0)) return 'winter'
  if ([2, 3, 4].includes(monthIndex0)) return 'spring'
  if ([5, 6, 7].includes(monthIndex0)) return 'summer'
  if ([8, 9].includes(monthIndex0)) return 'rainy'
  return 'autumn'
}

export const THEME: Record<
  Exclude<Season, 'auto'>,
  {
    bg: string
    heroBlob: string
    accentText: string
    pillIcon: string
    button: string
    buttonHover: string
    cardBase: string
    cardBorder: string
  }
> = {
  spring: {
    bg: 'bg-white text-gray-900',
    heroBlob: 'from-pink-200 via-rose-200 to-emerald-100',
    accentText:
      'bg-gradient-to-r from-pink-600 to-emerald-600 bg-clip-text text-transparent',
    pillIcon: 'text-pink-600',
    button: 'bg-gray-900 text-white',
    buttonHover: 'hover:bg-gray-800',
    cardBase: 'bg-white',
    cardBorder: 'border-black/5',
  },
  summer: {
    bg: 'bg-white text-gray-900',
    heroBlob: 'from-amber-200 via-orange-200 to-yellow-100',
    accentText:
      'bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent',
    pillIcon: 'text-amber-600',
    button: 'bg-gray-900 text-white',
    buttonHover: 'hover:bg-gray-800',
    cardBase: 'bg-white',
    cardBorder: 'border-black/5',
  },
  rainy: {
    bg: 'bg-slate-950 text-white',
    heroBlob: 'from-sky-500/40 via-indigo-500/30 to-slate-900/30',
    accentText:
      'bg-gradient-to-r from-sky-200 to-indigo-200 bg-clip-text text-transparent',
    pillIcon: 'text-sky-200',
    button: 'bg-white text-slate-900',
    buttonHover: 'hover:bg-slate-100',
    cardBase: 'bg-slate-900/40',
    cardBorder: 'border-white/10',
  },
  autumn: {
    bg: 'bg-white text-gray-900',
    heroBlob: 'from-orange-200 via-amber-200 to-red-100',
    accentText:
      'bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent',
    pillIcon: 'text-orange-600',
    button: 'bg-gray-900 text-white',
    buttonHover: 'hover:bg-gray-800',
    cardBase: 'bg-white',
    cardBorder: 'border-black/5',
  },
  winter: {
    bg: 'bg-slate-950 text-white',
    heroBlob: 'from-cyan-500/35 via-blue-500/25 to-slate-900/30',
    accentText:
      'bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent',
    pillIcon: 'text-cyan-200',
    button: 'bg-white text-slate-900',
    buttonHover: 'hover:bg-slate-100',
    cardBase: 'bg-slate-900/40',
    cardBorder: 'border-white/10',
  },
}

type ThemeCtx = {
  season: Season
  setSeason: (s: Season) => void
  resolvedSeason: Exclude<Season, 'auto'>
  theme: (typeof THEME)[Exclude<Season, 'auto'>]
}

const ThemeContext = createContext<ThemeCtx | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [season, setSeason] = useState<Season>('auto')

  const resolvedSeason = useMemo<Exclude<Season, 'auto'>>(() => {
    if (season !== 'auto') return season
    return monthToSeason(new Date().getMonth())
  }, [season])

  const theme = THEME[resolvedSeason]

  const value = useMemo(
    () => ({ season, setSeason, resolvedSeason, theme }),
    [season, resolvedSeason, theme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}