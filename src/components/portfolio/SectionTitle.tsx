'use client'
import React from 'react'
import { Pill } from './Pill'
import { useTheme } from './theme'
import { cn } from './utils'

export const SectionTitle: React.FC<{
  kicker?: string
  title: string
  subtitle?: string
}> = ({ kicker, title, subtitle }) => {
  const { theme } = useTheme()

  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {kicker ? (
        <div className="mb-3 flex justify-center">
          <Pill className={cn('border-black/5 bg-white/60 text-gray-700', theme.cardBorder)}>
            {kicker}
          </Pill>
        </div>
      ) : null}

      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-3 text-pretty text-base leading-relaxed text-gray-500 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}