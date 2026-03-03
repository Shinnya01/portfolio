export type Repo = {
  name: string
  lang: string
  description: string
  tags: string[]
  link: string
  featured?: boolean
}

export const PORTFOLIO = {
  name: 'Carl Justin Carreon',
  title: 'Full Stack Developer • PHP/Laravel • Vue/React • Tailwind',
  bio: `I build practical, production-ready apps — clean UI, solid backend, and deployments that don't break.`,
  location: 'Philippines',
  email: 'carreon.carll@gmail.com',
  github: 'https://github.com/Shinnya01',
  linkedin: '#',
}

export const NAV = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
] as const

export const REPOS: Repo[] = [
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