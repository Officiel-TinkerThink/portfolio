import { motion } from 'framer-motion'
import { profile, demos } from '../data'

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
            <a href="#playground" className="btn-primary">▶ Try the live demos</a>
            <a href="#services" className="btn-ghost">Hire me for AI work →</a>
          </div>
          <DemoStrip />
          <div className="mt-10 flex gap-5 text-slate-400">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="transition hover:text-accent"><SocialIcon name="github" className="w-6 h-6" /></a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-accent"><SocialIcon name="linkedin" className="w-6 h-6" /></a>
            <a href={profile.socials.medium} target="_blank" rel="noreferrer" className="transition hover:text-accent"><SocialIcon name="medium" className="w-6 h-6" /></a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import SocialIcon from './SocialIcon'
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

function DemoStrip() {
  const open = (id) => window.dispatchEvent(new CustomEvent('open-demo', { detail: id }))
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="mt-12"
    >
      <div className="mb-3 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-slate-500">
        <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
        {demos.length} interactive projects running in the browser — click one
      </div>
      <div className="flex min-w-0 max-w-full gap-3 overflow-x-auto pb-2 [scrollbar-width:thin]">
        {demos.map((d) => (
          <button
            key={d.id}
            onClick={() => open(d.id)}
            className="group relative w-44 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-panel/60 text-left transition hover:-translate-y-1 hover:border-accent/60"
            title={`Open ${d.name} in the playground`}
          >
            <img src={d.img} alt="" className="h-24 w-full object-cover object-top opacity-90 transition group-hover:opacity-100" loading="lazy" />
            <span className="block truncate px-3 py-2 text-xs font-semibold text-slate-200">{d.name}</span>
            <span className="absolute right-2 top-2 rounded-full bg-ink/80 px-2 py-0.5 text-[10px] font-mono text-accent">LIVE</span>
          </button>
        ))}
      </div>
    </motion.div>
  )
}
