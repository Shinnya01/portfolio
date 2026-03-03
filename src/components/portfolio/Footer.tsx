'use client'

import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { PORTFOLIO } from './data'
import { useTheme, THEME } from './theme'
import { cn } from './utils'

export function Footer() {
  const { theme } = useTheme()
  const isDark = theme === THEME.rainy || theme === THEME.winter

  return (
    <footer className={cn('py-10', isDark ? 'bg-black/40' : 'bg-gray-900 text-white')}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className={cn('text-center sm:text-left', isDark ? 'text-white' : 'text-white')}>
            <div className="text-sm font-semibold">{PORTFOLIO.name}</div>
            <div className={cn('text-xs', isDark ? 'text-white/70' : 'text-white/70')}>
              Built with Next.js + Tailwind • © {new Date().getFullYear()}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                'rounded-2xl p-2 transition',
                isDark ? 'bg-white/10 hover:bg-white/15' : 'bg-white/10 hover:bg-white/15'
              )}
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href={PORTFOLIO.linkedin}
              target="_blank"
              rel="noreferrer"
              className={cn(
                'rounded-2xl p-2 transition',
                isDark ? 'bg-white/10 hover:bg-white/15' : 'bg-white/10 hover:bg-white/15'
              )}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href={`mailto:${PORTFOLIO.email}`}
              className={cn(
                'rounded-2xl p-2 transition',
                isDark ? 'bg-white/10 hover:bg-white/15' : 'bg-white/10 hover:bg-white/15'
              )}
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}