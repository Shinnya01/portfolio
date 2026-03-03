'use client'

import React from 'react'
import { ArrowRight, Globe, Mail, Zap } from 'lucide-react'
import { PORTFOLIO, REPOS } from './data'
import { Pill } from './Pill'
import { cn } from './utils'
import { useTheme, THEME } from './theme'

export function Hero() {
  const { theme } = useTheme()
  const isDark = theme === THEME.rainy || theme === THEME.winter

  return (
    <section id="home" className="relative overflow-hidden pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div
          className={cn(
            'absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-70',
            'bg-gradient-to-br',
            theme.heroBlob
          )}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        {(theme === THEME.rainy || theme === THEME.winter) && (
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.7)_1px,transparent_0)] [background-size:16px_16px]" />
          </div>
        )}
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex flex-wrap justify-center gap-2">
            <Pill className={cn(isDark ? 'border-white/10 bg-white/10 text-white/80' : 'border-black/5 bg-white/60 text-gray-700')}>
              <Zap className={cn('h-4 w-4', theme.pillIcon)} />
              Full Stack • Laravel • Vue/React
            </Pill>

            <Pill className={cn(isDark ? 'border-white/10 bg-white/10 text-white/80' : 'border-black/5 bg-white/60 text-gray-700')}>
              <Globe className={cn('h-4 w-4', theme.pillIcon)} />
              {PORTFOLIO.location}
            </Pill>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Building clean UIs & robust backends <span className={theme.accentText}>that ship.</span>
          </h1>

          <p className={cn('mt-5 text-pretty text-base leading-relaxed sm:text-lg', isDark ? 'text-white/70' : 'text-gray-600')}>
            {PORTFOLIO.bio}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className={cn(
                'inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition sm:w-auto',
                theme.button,
                theme.buttonHover
              )}
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${PORTFOLIO.email}`}
              className={cn(
                'inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold shadow-sm transition sm:w-auto',
                isDark ? 'border-white/10 bg-white/5 text-white hover:bg-white/10' : 'border-black/10 bg-white text-gray-800 hover:bg-gray-50'
              )}
            >
              Contact <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className={cn(
            'mt-10 grid grid-cols-3 gap-3 rounded-3xl border p-4 text-left shadow-sm backdrop-blur sm:gap-4 sm:p-5',
            isDark ? 'border-white/10 bg-white/5' : 'border-black/5 bg-white/70'
          )}>
            <div className={cn('rounded-2xl p-4 shadow-sm', isDark ? 'bg-white/5' : 'bg-white')}>
              <div className={cn('text-xs font-medium', isDark ? 'text-white/60' : 'text-gray-500')}>Main Stack</div>
              <div className="mt-1 text-sm font-semibold">Laravel + Vue</div>
            </div>
            <div className={cn('rounded-2xl p-4 shadow-sm', isDark ? 'bg-white/5' : 'bg-white')}>
              <div className={cn('text-xs font-medium', isDark ? 'text-white/60' : 'text-gray-500')}>UI</div>
              <div className="mt-1 text-sm font-semibold">Tailwind</div>
            </div>
            <div className={cn('rounded-2xl p-4 shadow-sm', isDark ? 'bg-white/5' : 'bg-white')}>
              <div className={cn('text-xs font-medium', isDark ? 'text-white/60' : 'text-gray-500')}>Repos</div>
              <div className="mt-1 text-sm font-semibold">{REPOS.length}+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}