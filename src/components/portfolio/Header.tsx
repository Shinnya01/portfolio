'use client'

import React, { useEffect, useState } from 'react'
import { Code, Github, Mail, Menu, X } from 'lucide-react'
import { NAV, PORTFOLIO } from './data'
import { cn } from './utils'
import { Pill } from './Pill'
import { SEASONS, useTheme } from './theme'

export function Header() {
  const [open, setOpen] = useState(false)
  const { season, setSeason, resolvedSeason } = useTheme()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-black/5 bg-white/75 px-4 py-3 shadow-lg backdrop-blur-md">
          <a href="#home" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-pink-600 text-white shadow-sm">
              <Code className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">{PORTFOLIO.name}</div>
              <div className="text-xs text-gray-500">Portfolio</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <select
              value={season}
              onChange={(e) => setSeason(e.target.value as any)}
              className="rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-sm font-medium text-gray-800 shadow-sm outline-none backdrop-blur hover:bg-white"
              aria-label="Season theme"
            >
              {SEASONS.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.emoji} {s.label}
                </option>
              ))}
            </select>

            {/* <Pill className="border-black/5 bg-white/60 text-gray-700">
              Theme: <span className="font-semibold capitalize">{resolvedSeason}</span>
            </Pill> */}

            <a
              href={PORTFOLIO.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-black/5 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
            >
              <span className="inline-flex items-center gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </span>
            </a>

            <a
              href={`mailto:${PORTFOLIO.email}`}
              className="rounded-xl bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
            >
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </span>
            </a>
          </div>

          <button
            className="md:hidden rounded-xl border border-black/5 bg-white p-2 shadow-sm transition hover:bg-gray-50"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-black/30" onClick={() => setOpen(false)} />
          <div className="fixed inset-x-0 top-20 z-50 mx-auto max-w-7xl px-4 sm:px-6">
            <div className="rounded-2xl border border-black/5 bg-white p-3 shadow-xl">
              <div className="mb-2 px-2">
                <select
                  value={season}
                  onChange={(e) => setSeason(e.target.value as any)}
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-medium text-gray-800 outline-none"
                >
                  {SEASONS.map((s) => (
                    <option key={s.key} value={s.key}>
                      {s.emoji} {s.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-1">
                {NAV.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm font-medium text-gray-800 hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}