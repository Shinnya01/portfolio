'use client';

import React, { useState } from 'react';
import {
  Code,
  Layers,
  Briefcase,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ArrowRight,
  Zap,
  Globe,
  Star,
  BookOpen,
} from 'lucide-react';

// --- FULL PROJECT DATA ---

// Public Repositories, excluding the portfolio itself.
const ALL_PUBLIC_REPOS = [
    { name: 'simple-pos-system-php', lang: 'PHP', description: 'A practical, file-based Point of Sale (POS) system built with vanilla PHP and SQLite for managing inventory and tracking basic sales transactions.', tags: ['PHP', 'SQLite', 'Vanilla JS', 'POS'], link: 'https://github.com/Shinnya01/simple-pos-system-php' },
    { name: 'dlchub-laravel-react', lang: 'TypeScript', description: 'A sophisticated full-stack application integrating a Laravel API backend with a dedicated React/TypeScript frontend for a dynamic, modern user experience.', tags: ['Laravel', 'React', 'TypeScript', 'Full Stack', 'API'], link: 'https://github.com/Shinnya01/dlchub-laravel-react' },
    { name: '7task-react', lang: 'TypeScript', description: 'A reliable task management application demonstrating proficiency in TypeScript and the React ecosystem for building type-safe and scalable frontend logic.', tags: ['React', 'TypeScript', 'Task Management', 'Frontend'], link: 'https://github.com/Shinnya01/7task-react' },
    { name: 'sarisaristore-livewire', lang: 'Blade', description: 'A prototype for a local store management system built using the Laravel Livewire and Blade ecosystem, showcasing real-time data binding and rapid development techniques.', tags: ['Laravel', 'Livewire', 'Blade', 'PHP', 'Store Management'], link: 'https://github.com/Shinnya01/sarisaristore-livewire' },
    { name: 'dlc-archive', lang: 'Blade', description: 'Implementation of complex UI and data presentation using Laravel\'s Blade templating engine, focusing on efficient and maintainable views.', tags: ['Laravel', 'Blade', 'Front-End', 'Templating'], link: 'https://github.com/Shinnya01/dlc-archive' },
    { name: 'dlchub-livewire', lang: 'Blade', description: 'Showcase of reusable components and reactivity using the Laravel Livewire framework for efficient frontend-backend data handling in a seamless manner.', tags: ['Laravel', 'Livewire', 'Blade', 'Full Stack'], link: 'https://github.com/Shinnya01/dlchub-livewire' },
    { name: 'dlchub_attempt3', lang: 'PHP', description: 'An earlier iteration of the DLCHub project, demonstrating continuous development and refinement in core PHP logic and object-oriented architecture.', tags: ['PHP', 'Development Cycle', 'OOP'], link: 'https://github.com/Shinnya01/dlchub_attempt3' },
    { name: 'dino', lang: 'Unknown', description: 'A simple interactive web game, possibly a clone of the famous Chrome Dino Runner, used for learning vanilla JavaScript game loop logic.', tags: ['JavaScript', 'Game Dev', 'HTML'], link: 'https://github.com/Shinnya01/dino' },
    { name: 'LATEST-DLCHUB', lang: 'PHP', description: 'A file representing one of the latest attempts at the core DLCHUB application logic.', tags: ['PHP', 'Application Logic'], link: 'https://github.com/Shinnya01/LATEST-DLCHUB' },
    { name: 'DLC-HUB', lang: 'CSS', description: 'Early work focusing on styling and CSS architecture, potentially related to the DLCHub visual design.', tags: ['CSS', 'Styling', 'UI'], link: 'https://github.com/Shinnya01/DLC-HUB' },
    { name: 'chatsys', lang: 'CSS', description: 'A project focused on styling the interface for a simple chat system using modern CSS techniques.', tags: ['CSS', 'Chat UI', 'Styling'], link: 'https://github.com/Shinnya01/chatsys' },
    { name: 'DLCHUB', lang: 'CSS', description: 'Another foundational project focusing on CSS and layout techniques for the main application page.', tags: ['CSS', 'Layout', 'HTML'], link: 'https://github.com/Shinnya01/DLCHUB' },
    { name: 'practice-react-tailwind', lang: 'JavaScript', description: 'A foundational project used to master the integration of modern React patterns with Tailwind CSS for rapid, utility-first UI development.', tags: ['React', 'Tailwind CSS', 'JavaScript', 'UI/UX'], link: 'https://github.com/Shinnya01/practice-react-tailwind' },
    { name: 'avcafe', lang: 'PHP', description: 'A project likely related to an audio/video or coffee shop management system, showcasing practical application development in PHP.', tags: ['PHP', 'Management System', 'Backend'], link: 'https://github.com/Shinnya01/avcafe' },
    { name: 'arduino', lang: 'Unknown', description: 'A repository dedicated to code or resources for Arduino microcontroller projects, highlighting an interest in embedded systems or hardware integration.', tags: ['Arduino', 'Embedded Systems', 'Hardware'], link: 'https://github.com/Shinnya01/arduino' },
];

// Split projects into featured (top 4-5) and archive (the rest)
const FEATURED_PROJECTS = ALL_PUBLIC_REPOS.slice(0, 5);
const ARCHIVE_PROJECTS = ALL_PUBLIC_REPOS.slice(5);


const PORTFOLIO_DATA = {
  name: 'Shinya',
  title: 'Full Stack Developer | PHP/Laravel & Next.js Ecosystems',
  bio: 'A passionate developer focused on robust full-stack solutions. Proficient in crafting scalable backends with PHP (Laravel/Livewire) and dynamic, type-safe frontends using Next.js, React, and TypeScript.',
  skills: [
    { icon: <Code className="w-6 h-6 text-indigo-500" />, name: 'Frontend', details: 'Tailwind CSS, Blade Templates' },
    { icon: <Zap className="w-6 h-6 text-green-500" />, name: 'Backend/APIs', details: 'PHP, Laravel, Livewire' },
    { icon: <Globe className="w-6 h-6 text-red-500" />, name: 'Databases', details: 'MySQL, SQLite' },
    { icon: <Star className="w-6 h-6 text-yellow-500" />, name: 'Tools/Deployment', details: 'Git, Vercel, Composer, npm/yarn' },
  ],
};

// --- COMPONENTS ---

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Featured', href: '#featured-projects' },
    { name: 'Archive', href: '#project-archive' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gray-900 tracking-tight transition-colors hover:text-indigo-600">
          {PORTFOLIO_DATA.name}.dev
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

const Hero: React.FC = () => (
  <section id="home" className="pt-32 pb-24 bg-gray-50 flex items-center min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">Shinya</span>
      </h1>
      <p className="mt-4 text-2xl md:text-3xl font-light text-gray-700">
        {PORTFOLIO_DATA.title}
      </p>
      <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
        {PORTFOLIO_DATA.bio}
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="#featured-projects"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-transform duration-200 transform hover:scale-105"
        >
          View Featured Work
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-3 border border-indigo-600 text-base font-medium rounded-full shadow-lg text-indigo-600 bg-white hover:bg-indigo-50 transition-transform duration-200 transform hover:scale-105"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </section>
);

const Skills: React.FC = () => (
  <section id="skills" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
        My Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PORTFOLIO_DATA.skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-xl shadow-xl border border-gray-100 transform hover:scale-[1.02] transition duration-300"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 rounded-full bg-indigo-50">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
            </div>
            <p className="text-gray-600">{skill.details}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- NEW FEATURED PROJECTS COMPONENT ---
const FeaturedProjects: React.FC = () => (
  <section id="featured-projects" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
        Featured Work
      </h2>
      <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
        These are my most comprehensive projects showcasing full-stack application development and technical depth.
      </p>
      <div className="space-y-16">
        {FEATURED_PROJECTS.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-2xl shadow-2xl overflow-hidden group`}
          >
            {/* Project Image Placeholder */}
            <div className="lg:w-1/2 h-64 lg:h-auto bg-indigo-100 flex items-center justify-center p-8">
              <div className="text-indigo-600 text-center">
                <Layers className="w-12 h-12 mx-auto mb-2" />
                <p className="font-semibold">{project.name} Mockup</p>
                <p className="text-sm text-indigo-400">Placeholder Image</p>
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full text-white bg-pink-500 mb-2">{project.lang}</span>
              <h3 className="text-3xl font-bold text-gray-900">{project.name}</h3>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 font-semibold text-lg hover:text-pink-600 transition-colors duration-200"
                >
                  View on GitHub
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- NEW PROJECT ARCHIVE COMPONENT (Compact Grid) ---
const ProjectArchive: React.FC = () => (
  <section id="project-archive" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
        Project Archive ({ARCHIVE_PROJECTS.length} More)
      </h2>
      <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
        A collection of older repositories, learning projects, and specific technology deep dives.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARCHIVE_PROJECTS.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-gray-50 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-indigo-200 transition duration-300 transform hover:scale-[1.01]"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600">
                {project.name}
              </h3>
              <BookOpen className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-sm text-gray-600 h-12 overflow-hidden">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                {project.lang}
              </span>
              {project.tags.slice(0, 2).map((tag) => (
                  <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-700"
                  >
                      {tag}
                  </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);


const Contact: React.FC = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
        Ready to build something great?
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
        I'm currently open to new opportunities and collaboration. Let's connect!
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <a
          href={`mailto:carreon.carll@gmail.com`} // Update email placeholder
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-pink-600 hover:bg-pink-700 transition duration-200 transform hover:scale-105"
        >
          <Mail className="mr-2 h-5 w-5" />
          Send Me an Email
        </a>
        <a
          href="#" // Add your LinkedIn profile link here
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full shadow-lg text-gray-700 bg-white hover:bg-gray-50 transition duration-200 transform hover:scale-105"
        >
          <Linkedin className="mr-2 h-5 w-5" />
          LinkedIn
        </a>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <p className="text-sm mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with Next.js, TypeScript, and Tailwind CSS.
      </p>
      <div className="flex space-x-6">
        <a href="https://github.com/Shinnya01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="GitHub">
          <Github className="w-6 h-6" />
        </a>
        <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href={`mailto:carreon.carll@gmail.com`} className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="Email">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </div>
  </footer>
);

// --- MAIN PAGE COMPONENT ---
const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Scroll-smooth class added to the root element for pleasant navigation */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Header />
      <main>
        <Hero />
        <Skills />
        <FeaturedProjects />
        <ProjectArchive />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
