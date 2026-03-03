'use client'

import React, { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Code,
  Github,
  Globe,
  Linkedin,
  Mail,
  Menu,
  Star,
  X,
  Zap,
} from 'lucide-react'

type Repo = {
  name: string
  lang: string
  description: string
  tags: string[]
  link: string
  featured?: boolean
}

const PORTFOLIO = {
  name: 'Carl Justin Carreon',
  title: 'Full Stack Developer • PHP/Laravel • Vue/React • Tailwind',
  bio: `I build practical, production-ready apps — clean UI, solid backend, and deployments that don't break.`,
  location: 'Philippines',
  email: 'carreon.carll@gmail.com',
  github: 'https://github.com/Shinnya01',
  linkedin: '#', // TODO: put your real LinkedIn link
}

const REPOS: Repo[] = [
  {
    name: 'document-scanner',
    lang: 'Vue',
    description:
      'Document scanning + workflow app. Focused on UI, table flows, and real-world CRUD experience.',
    tags: ['Vue', 'Inertia', 'Laravel', 'UI'],
    link: 'https://github.com/Shinnya01/document-scanner',
    featured: true,
  },
  {
    name: 'laravel-vue',
    lang: 'PHP',
    description:
      'Laravel + Vue stack project showcasing backend patterns, controllers, validation, and UI wiring.',
    tags: ['Laravel', 'Vue', 'PHP', 'Full Stack'],
    link: 'https://github.com/Shinnya01/laravel-vue',
    featured: true,
  },
  {
    name: 'mixnmatch',
    lang: 'TypeScript',
    description:
      'TypeScript project exploring app structure, UI composition, and reusable components.',
    tags: ['TypeScript', 'Frontend', 'UI'],
    link: 'https://github.com/Shinnya01/mixnmatch',
    featured: true,
  },
  {
    name: 'task-manager',
    lang: 'TypeScript',
    description:
      'Task management app with modern UI and typical product flows (create, filter, status).',
    tags: ['TypeScript', 'React/Vue', 'CRUD'],
    link: 'https://github.com/Shinnya01/task-manager',
    featured: true,
  },
  {
    name: 'inventory',
    lang: 'TypeScript',
    description:
      'Inventory system project: product listing, management flows, and practical data handling.',
    tags: ['TypeScript', 'Inventory', 'UI'],
    link: 'https://github.com/Shinnya01/inventory',
    featured: true,
  },
  {
    name: 'e-grocery',
    lang: 'TypeScript',
    description:
      'E-grocery style app exploring storefront layout, cart-like flows, and UI patterns.',
    tags: ['TypeScript', 'E-commerce', 'UI'],
    link: 'https://github.com/Shinnya01/e-grocery',
  },
  {
    name: 'shoppee-clone-e-commerce',
    lang: 'TypeScript',
    description:
      'Shopee-inspired UI clone focusing on layout, components, and browsing experience.',
    tags: ['TypeScript', 'E-commerce', 'Clone'],
    link: 'https://github.com/Shinnya01/shoppee-clone-e-commerce',
  },
  {
    name: 'e-commerce',
    lang: 'TypeScript',
    description:
      'General e-commerce project exploring product pages, lists, and common UX patterns.',
    tags: ['TypeScript', 'E-commerce', 'Frontend'],
    link: 'https://github.com/Shinnya01/e-commerce',
  },
  {
    name: 'dlchub-livewire',
    lang: 'Blade',
    description:
      'Livewire project showcasing reactive UI on Laravel without heavy frontend frameworks.',
    tags: ['Laravel', 'Livewire', 'Blade'],
    link: 'https://github.com/Shinnya01/dlchub-livewire',
  },
  {
    name: 'dlc-archive',
    lang: 'Blade',
    description:
      'Blade-based UI implementation focusing on templating, layout structure, and views.',
    tags: ['Laravel', 'Blade', 'UI'],
    link: 'https://github.com/Shinnya01/dlc-archive',
  },
  {
    name: '7-mini-project_react-laravel',
    lang: 'TypeScript',
    description:
      'Mini projects collection integrating Laravel and modern frontend approaches.',
    tags: ['Laravel', 'React', 'TypeScript'],
    link: 'https://github.com/Shinnya01/7-mini-project_react-laravel',
  },
  {
    name: 'simple-pos-system-php',
    lang: 'PHP',
    description:
      'File-based POS system with SQLite — inventory + sales basics in vanilla PHP.',
    tags: ['PHP', 'SQLite', 'POS', 'Vanilla JS'],
    link: 'https://github.com/Shinnya01/simple-pos-system-php',
  },
  {
    name: '7task-react',
    lang: 'TypeScript',
    description:
      'Task app highlighting type-safe UI logic and scalable React patterns.',
    tags: ['React', 'TypeScript', 'Frontend'],
    link: 'https://github.com/Shinnya01/7task-react',
  },
  {
    name: 'sarisaristore-livewire',
    lang: 'Blade',
    description:
      'Local store management prototype using Livewire reactivity and Blade templating.',
    tags: ['Laravel', 'Livewire', 'Blade'],
    link: 'https://github.com/Shinnya01/sarisaristore-livewire',
  },
  {
    name: 'dlchub-laravel-react',
    lang: 'TypeScript',
    description:
      'Full-stack app: Laravel API backend + React/TS frontend for a modern UX.',
    tags: ['Laravel', 'React', 'TypeScript', 'API'],
    link: 'https://github.com/Shinnya01/dlchub-laravel-react',
  },
  {
    name: 'dlchub_attempt3',
    lang: 'PHP',
    description:
      'Earlier iteration of DLCHub showing OOP growth and iterative development.',
    tags: ['PHP', 'OOP'],
    link: 'https://github.com/Shinnya01/dlchub_attempt3',
  },
  {
    name: 'dino',
    lang: 'JavaScript',
    description: 'Simple web game to learn game loop logic and DOM interactions.',
    tags: ['JavaScript', 'Game'],
    link: 'https://github.com/Shinnya01/dino',
  },
  {
    name: 'practice-react-tailwind',
    lang: 'JavaScript',
    description:
      'Practice repo for React patterns + Tailwind utility-first UI building.',
    tags: ['React', 'Tailwind', 'UI'],
    link: 'https://github.com/Shinnya01/practice-react-tailwind',
  },
  {
    name: 'avcafe',
    lang: 'PHP',
    description:
      'Practical PHP project experimenting with app structure and management system features.',
    tags: ['PHP', 'Backend'],
    link: 'https://github.com/Shinnya01/avcafe',
  },
  {
    name: 'arduino',
    lang: 'C++',
    description: 'Arduino experiments and microcontroller project resources.',
    tags: ['Arduino', 'Embedded'],
    link: 'https://github.com/Shinnya01/arduino',
  },
]

const NAV = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(' ')
}

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? 'home')

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (!els.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        // pick the entry with highest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { root: null, threshold: [0.2, 0.35, 0.5, 0.65], rootMargin: '-20% 0px -60% 0px' }
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [sectionIds.join(',')])

  return active
}

const Pill: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <span
    className={cn(
      'inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur',
      className
    )}
  >
    {children}
  </span>
)

const SectionTitle: React.FC<{ kicker?: string; title: string; subtitle?: string }> = ({
  kicker,
  title,
  subtitle,
}) => (
  <div className="mx-auto mb-10 max-w-3xl text-center">
    {kicker ? (
      <div className="mb-3 flex justify-center">
        <Pill className="bg-white/70">{kicker}</Pill>
      </div>
    ) : null}
    <h2 className="text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
      {title}
    </h2>
    {subtitle ? (
      <p className="mt-3 text-pretty text-base leading-relaxed text-gray-600 sm:text-lg">
        {subtitle}
      </p>
    ) : null}
  </div>
)

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(['home', 'skills', 'projects', 'contact'])

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
              <div className="text-sm font-semibold text-gray-900">{PORTFOLIO.name}</div>
              <div className="text-xs text-gray-500">Portfolio</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => {
              const id = item.href.replace('#', '')
              const isActive = active === id
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'rounded-xl px-3 py-2 text-sm font-medium transition',
                    isActive
                      ? 'bg-gray-900 text-white shadow-sm'
                      : 'text-gray-700 hover:bg-gray-100'
                  )}
                >
                  {item.name}
                </a>
              )
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
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

      {/* Mobile drawer */}
      {open ? (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="fixed inset-x-0 top-20 z-50 mx-auto max-w-7xl px-4 sm:px-6">
            <div className="rounded-2xl border border-black/5 bg-white p-3 shadow-xl">
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
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={PORTFOLIO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-black/5 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm"
                >
                  <span className="inline-flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    GitHub
                  </span>
                </a>
                <a
                  href={`mailto:${PORTFOLIO.email}`}
                  className="rounded-xl bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

const Hero: React.FC = () => (
  <section id="home" className="relative overflow-hidden pt-32">
    {/* background */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-200 via-pink-200 to-amber-100 blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </div>

    <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex flex-wrap justify-center gap-2">
          <Pill>
            <Zap className="h-4 w-4 text-indigo-600" />
            Full Stack • Laravel • Vue/React
          </Pill>
          <Pill>
            <Globe className="h-4 w-4 text-pink-600" />
            {PORTFOLIO.location}
          </Pill>
        </div>

        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Building clean UIs & robust backends{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
            that ship.
          </span>
        </h1>

        <p className="mt-5 text-pretty text-base leading-relaxed text-gray-600 sm:text-lg">
          {PORTFOLIO.bio}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 sm:w-auto"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO.email}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50 sm:w-auto"
          >
            Contact <Mail className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 rounded-3xl border border-black/5 bg-white/70 p-4 text-left shadow-sm backdrop-blur sm:gap-4 sm:p-5">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-xs font-medium text-gray-500">Main Stack</div>
            <div className="mt-1 text-sm font-semibold text-gray-900">Laravel + Vue</div>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-xs font-medium text-gray-500">UI</div>
            <div className="mt-1 text-sm font-semibold text-gray-900">Tailwind</div>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-xs font-medium text-gray-500">Repos</div>
            <div className="mt-1 text-sm font-semibold text-gray-900">{REPOS.length}+</div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Skills: React.FC = () => {
  const skills = [
    {
      icon: <Code className="h-5 w-5 text-indigo-600" />,
      title: 'Frontend',
      body: 'Tailwind CSS, Vue, React, responsive UI, component systems.',
    },
    {
      icon: <Zap className="h-5 w-5 text-emerald-600" />,
      title: 'Backend / APIs',
      body: 'Laravel, PHP, validation, jobs/queues, REST APIs.',
    },
    {
      icon: <Globe className="h-5 w-5 text-pink-600" />,
      title: 'Database',
      body: 'MySQL, SQLite, migrations, relationships, query optimization.',
    },
    {
      icon: <Star className="h-5 w-5 text-amber-600" />,
      title: 'Tools / Deployment',
      body: 'Git, Docker basics, Vercel, Composer, npm.',
    },
  ]

  return (
    <section id="skills" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Skills"
          title="What I build with"
          subtitle="A practical toolkit focused on shipping full-stack apps with clean UI and stable backend behavior."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gray-50 shadow-sm">
                  {s.icon}
                </div>
                <div className="text-base font-semibold text-gray-900">{s.title}</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Projects: React.FC = () => {
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
        // keep featured first when mode=all
        const af = a.featured ? 1 : 0
        const bf = b.featured ? 1 : 0
        if (af !== bf) return bf - af
        return a.name.localeCompare(b.name)
      })
  }, [mode, q, tag])

  return (
    <section id="projects" className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Projects"
          title="Selected work + repo archive"
          subtitle="Use the search and filters to quickly show the most relevant repos for the role you’re applying for."
        />

        {/* Controls */}
        <div className="mx-auto mb-8 max-w-4xl rounded-3xl border border-black/5 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMode('featured')}
                className={cn(
                  'rounded-2xl px-4 py-2 text-sm font-semibold transition',
                  mode === 'featured'
                    ? 'bg-gray-900 text-white'
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
                    ? 'bg-gray-900 text-white'
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
                placeholder="Search (e.g., Laravel, e-commerce, Vue)..."
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none ring-0 transition focus:border-gray-900 sm:max-w-sm"
              />

              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none transition focus:border-gray-900 sm:w-56"
              >
                {allTags.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-3 text-xs text-gray-500">
            Showing <span className="font-semibold text-gray-900">{shown.length}</span>{' '}
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
              className="group rounded-3xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="text-base font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                      {repo.name}
                    </div>
                    {repo.featured ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-800">
                        <Star className="h-3.5 w-3.5" /> Featured
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-1 text-xs font-medium text-gray-500">{repo.lang}</div>
                </div>
                <BookOpen className="h-5 w-5 text-gray-300 transition group-hover:text-indigo-400" />
              </div>

              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
                {repo.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {repo.tags.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/5 bg-gray-50 px-3 py-1 text-[11px] font-medium text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
                View on GitHub <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

const Contact: React.FC = () => (
  <section id="contact" className="bg-white py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        kicker="Contact"
        title="Let’s build something"
        subtitle="Open to opportunities and collaboration. If you like what you see, message me and I’ll reply fast."
      />

      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${PORTFOLIO.email}`}
          className="group rounded-3xl border border-black/5 bg-gray-50 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white shadow-sm">
              <Mail className="h-5 w-5 text-pink-600" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Email me</div>
              <div className="text-xs text-gray-600">{PORTFOLIO.email}</div>
            </div>
          </div>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
            Send message <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </div>
        </a>

        <a
          href={PORTFOLIO.github}
          target="_blank"
          rel="noreferrer"
          className="group rounded-3xl border border-black/5 bg-gray-50 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white shadow-sm">
              <Github className="h-5 w-5 text-gray-900" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">GitHub</div>
              <div className="text-xs text-gray-600">@Shinnya01</div>
            </div>
          </div>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
            View profile <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </div>
        </a>
      </div>

      <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
        <a
          href={PORTFOLIO.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50"
        >
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
        >
          Browse projects <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
)

const Footer: React.FC = () => (
  <footer className="bg-gray-900 py-10 text-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="text-sm font-semibold">{PORTFOLIO.name}</div>
          <div className="text-xs text-white/70">
            Built with Next.js + Tailwind • © {new Date().getFullYear()}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PORTFOLIO.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-white/10 p-2 transition hover:bg-white/15"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={PORTFOLIO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-white/10 p-2 transition hover:bg-white/15"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${PORTFOLIO.email}`}
            className="rounded-2xl bg-white/10 p-2 transition hover:bg-white/15"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}