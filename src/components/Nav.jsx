import { motion } from 'framer-motion'
import { profile } from '../data'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#resume', label: 'Resume' },
  { href: '#portfolio', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full border-b border-white/5 bg-ink/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2 font-mono text-lg font-bold">
          <span className="text-accent">&lt;/&gt;</span>
          <span>{profile.name}</span>
        </a>
        <ul className="hidden gap-7 text-sm text-slate-300 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-accent">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-primary !px-4 !py-2 text-sm">Hire me</a>
      </nav>
    </motion.header>
  )
}
