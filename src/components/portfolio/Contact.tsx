'use client'

import React from 'react'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { PORTFOLIO } from './data'
import { SectionTitle } from './SectionTitle'
import { useTheme, THEME } from './theme'
import { cn } from './utils'

export function Contact() {
  const { theme } = useTheme()
  const isDark = theme === THEME.rainy || theme === THEME.winter

  return (
    <section id="contact" className={cn('py-16 sm:py-20', isDark ? 'bg-transparent' : 'bg-white')}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Contact"
          title="Let’s build something"
          subtitle="Open to opportunities and collaboration. If you like what you see, message me and I’ll reply fast."
        />

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${PORTFOLIO.email}`}
            className={cn(
              'group rounded-3xl border p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md',
              theme.cardBase,
              theme.cardBorder
            )}
          >
            <div className="flex items-center gap-3">
              <div className={cn('grid h-11 w-11 place-items-center rounded-2xl shadow-sm', isDark ? 'bg-white/5' : 'bg-white')}>
                <Mail className={cn('h-5 w-5', theme.pillIcon)} />
              </div>
              <div>
                <div className={cn('text-sm font-semibold', isDark ? 'text-white' : 'text-gray-900')}>Email me</div>
                <div className={cn('text-xs', isDark ? 'text-white/60' : 'text-gray-600')}>{PORTFOLIO.email}</div>
              </div>
            </div>
            <div className={cn('mt-4 inline-flex items-center gap-2 text-sm font-semibold', isDark ? 'text-white' : 'text-gray-900')}>
              Send message <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </div>
          </a>

          <a
            href={PORTFOLIO.github}
            target="_blank"
            rel="noreferrer"
            className={cn(
              'group rounded-3xl border p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md',
              theme.cardBase,
              theme.cardBorder
            )}
          >
            <div className="flex items-center gap-3">
              <div className={cn('grid h-11 w-11 place-items-center rounded-2xl shadow-sm', isDark ? 'bg-white/5' : 'bg-white')}>
                <Github className={cn('h-5 w-5', isDark ? 'text-white' : 'text-gray-900')} />
              </div>
              <div>
                <div className={cn('text-sm font-semibold', isDark ? 'text-white' : 'text-gray-900')}>GitHub</div>
                <div className={cn('text-xs', isDark ? 'text-white/60' : 'text-gray-600')}>@Shinnya01</div>
              </div>
            </div>
            <div className={cn('mt-4 inline-flex items-center gap-2 text-sm font-semibold', isDark ? 'text-white' : 'text-gray-900')}>
              View profile <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </div>
          </a>
        </div>

        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
          <a
            href={PORTFOLIO.linkedin}
            target="_blank"
            rel="noreferrer"
            className={cn(
              'inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold shadow-sm transition',
              isDark ? 'border-white/10 bg-white/5 text-white hover:bg-white/10' : 'border-black/10 bg-white text-gray-800 hover:bg-gray-50'
            )}
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>

          <a
            href={`mailto:${PORTFOLIO.email}`}
            className={cn(
              'inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm transition',
              theme.button,
              theme.buttonHover
            )}
          >
            Quick Email <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}