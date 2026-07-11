import { motion } from 'framer-motion'
import { profile } from '../data'

const roles = ['AI Engineer', 'LLM & Agent Developer', 'Software Developer', 'ML Engineer']

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="grid-overlay absolute inset-0 animate-grid opacity-60" />
      <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute right-10 bottom-10 h-64 w-64 rounded-full bg-accent2/20 blur-3xl" />

      <div className="section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">{profile.brand} · {profile.tagline}</span>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xl text-accent md:text-2xl">
            <motion.span
              key="rot"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* rotating roles via CSS-less simple state below */}
            </motion.span>
            <RotatingRoles roles={roles} />
          </p>
          <p className="mt-6 max-w-xl text-lg text-muted">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#services" className="btn-primary">Hire me for AI work →</a>
            <a href="#portfolio" className="btn-ghost">See my work</a>
          </div>
          <div className="mt-10 flex gap-5 text-slate-400">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="transition hover:text-accent"><i className="bi bi-github text-2xl" /></a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-accent"><i className="bi bi-linkedin text-2xl" /></a>
            <a href={profile.socials.medium} target="_blank" rel="noreferrer" className="transition hover:text-accent"><i className="bi bi-medium text-2xl" /></a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
function RotatingRoles({ roles }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % roles.length), 2200)
    return () => clearInterval(t)
  }, [roles.length])
  return (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="gradient-text"
    >
      {roles[i]}
    </motion.span>
  )
}
