'use client'

import React from 'react'
import { Code, Globe, Star, Zap } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import { useTheme, THEME } from './theme'
import { cn } from './utils'

export function Skills() {
  const { theme } = useTheme()
  const isDark = theme === THEME.rainy || theme === THEME.winter

  const skills = [
    {
      icon: <Code className={cn('h-5 w-5', theme.pillIcon)} />,
      title: 'Frontend',
      body: 'Tailwind CSS, Vue, React, responsive UI, component systems.',
    },
    {
      icon: <Zap className={cn('h-5 w-5', theme.pillIcon)} />,
      title: 'Backend / APIs',
      body: 'Laravel, PHP, validation, jobs/queues, REST APIs.',
    },
    {
      icon: <Globe className={cn('h-5 w-5', theme.pillIcon)} />,
      title: 'Database',
      body: 'MySQL, SQLite, migrations, relationships, query optimization.',
    },
    {
      icon: <Star className={cn('h-5 w-5', theme.pillIcon)} />,
      title: 'Tools / Deployment',
      body: 'Git, Vercel, Composer, npm, Docker basics.',
    },
  ]

  return (
    <section id="skills" className={cn('py-16 sm:py-20', isDark ? 'bg-transparent' : 'bg-white')}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Skills"
          title="What I build with"
          subtitle="A practical toolkit for shipping full-stack apps with clean UI and stable backend behavior."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div
              key={s.title}
              className={cn(
                'group rounded-3xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md',
                theme.cardBase,
                theme.cardBorder
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    'grid h-10 w-10 place-items-center rounded-2xl shadow-sm',
                    isDark ? 'bg-white/5' : 'bg-gray-50'
                  )}
                >
                  {s.icon}
                </div>
                <div className={cn('text-base font-semibold', isDark ? 'text-white' : 'text-gray-900')}>
                  {s.title}
                </div>
              </div>
              <p className={cn('mt-3 text-sm leading-relaxed', isDark ? 'text-white/70' : 'text-gray-600')}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}