'use client'

import React, { useMemo, useState } from 'react'
import { ArrowRight, BookOpen, Star } from 'lucide-react'
import { REPOS } from './data'
import { SectionTitle } from './SectionTitle'
import { useTheme, THEME } from './theme'
import { cn } from './utils'

export function Projects() {
  const { theme } = useTheme()
  const isDark = theme === THEME.rainy || theme === THEME.winter

  const [mode, setMode] = useState<'featured' | 'all'>('featured')
  const [q, setQ] = useState('')
  const [tag, setTag] = useState<string>('All')

  const allTags = useMemo(() => {
    const set = new Set<string>()
    REPOS.forEach((r) => r.tags.forEach((t) => set.add(t)))
    return ['All', ...Array.from(set).sort((a, b) => a.localeCompare(b))]
  }, [])

  const shown = useMemo(() => {
    const base = mode === 'featured' ? REPOS.filter((r) => r.featured) : REPOS
    const qq = q.trim().toLowerCase()

    return base
      .filter((r) => {
        if (tag !== 'All' && !r.tags.includes(tag)) return false
        if (!qq) return true
        return (
          r.name.toLowerCase().includes(qq) ||
          r.lang.toLowerCase().includes(qq) ||
          r.description.toLowerCase().includes(qq) ||
          r.tags.some((t) => t.toLowerCase().includes(qq))
        )
      })
      .sort((a, b) => {
        const af = a.featured ? 1 : 0
        const bf = b.featured ? 1 : 0
        if (af !== bf) return bf - af
        return a.name.localeCompare(b.name)
      })
  }, [mode, q, tag])

  return (
    <section id="projects" className={cn('py-16 sm:py-20', isDark ? 'bg-transparent' : 'bg-gray-50')}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Projects"
          title="Selected work + repo archive"
          subtitle="Search and filter to highlight the most relevant repos for the role you’re applying for."
        />

        {/* Controls */}
        <div
          className={cn(
            'mx-auto mb-8 max-w-4xl rounded-3xl border p-4 shadow-sm',
            theme.cardBase,
            theme.cardBorder
          )}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMode('featured')}
                className={cn(
                  'rounded-2xl px-4 py-2 text-sm font-semibold transition',
                  mode === 'featured'
                    ? isDark
                      ? 'bg-white text-slate-900'
                      : 'bg-gray-900 text-white'
                    : isDark
                      ? 'bg-white/10 text-white hover:bg-white/15'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                )}
              >
                Featured
              </button>

              <button
                onClick={() => setMode('all')}
                className={cn(
                  'rounded-2xl px-4 py-2 text-sm font-semibold transition',
                  mode === 'all'
                    ? isDark
                      ? 'bg-white text-slate-900'
                      : 'bg-gray-900 text-white'
                    : isDark
                      ? 'bg-white/10 text-white hover:bg-white/15'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                )}
              >
                All Repos
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:justify-end">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search (Laravel, Vue, e-commerce...)"
                className={cn(
                  'w-full rounded-2xl border px-4 py-2 text-sm outline-none transition sm:max-w-sm',
                  isDark
                    ? 'border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-white/30'
                    : 'border-black/10 bg-white text-gray-900 placeholder:text-gray-400 focus:border-gray-900'
                )}
              />

              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className={cn(
                  'w-full rounded-2xl border px-4 py-2 text-sm outline-none transition sm:w-56',
                  isDark
                    ? 'border-white/10 bg-white/5 text-white focus:border-white/30'
                    : 'border-black/10 bg-white text-gray-900 focus:border-gray-900'
                )}
              >
                {allTags.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={cn('mt-3 text-xs', isDark ? 'text-white/60' : 'text-gray-500')}>
            Showing <span className={cn('font-semibold', isDark ? 'text-white' : 'text-gray-900')}>{shown.length}</span>{' '}
            repos
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((repo) => (
            <a
              key={repo.name}
              href={repo.link}
              target="_blank"
              rel="noreferrer"
              className={cn(
                'group rounded-3xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md',
                theme.cardBase,
                theme.cardBorder
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className={cn('text-base font-semibold transition', isDark ? 'text-white' : 'text-gray-900')}>
                      {repo.name}
                    </div>
                    {repo.featured ? (
                      <span className={cn(
                        'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold',
                        isDark ? 'bg-white/10 text-white' : 'bg-amber-100 text-amber-800'
                      )}>
                        <Star className="h-3.5 w-3.5" /> Featured
                      </span>
                    ) : null}
                  </div>
                  <div className={cn('mt-1 text-xs font-medium', isDark ? 'text-white/60' : 'text-gray-500')}>
                    {repo.lang}
                  </div>
                </div>

                <BookOpen className={cn('h-5 w-5 transition', isDark ? 'text-white/30 group-hover:text-white/60' : 'text-gray-300 group-hover:text-indigo-400')} />
              </div>

              <p className={cn('mt-3 line-clamp-3 text-sm leading-relaxed', isDark ? 'text-white/70' : 'text-gray-600')}>
                {repo.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {repo.tags.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className={cn(
                      'rounded-full border px-3 py-1 text-[11px] font-medium',
                      isDark ? 'border-white/10 bg-white/5 text-white/80' : 'border-black/5 bg-gray-50 text-gray-700'
                    )}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className={cn('mt-5 inline-flex items-center gap-2 text-sm font-semibold', isDark ? 'text-white' : 'text-gray-900')}>
                View on GitHub <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}