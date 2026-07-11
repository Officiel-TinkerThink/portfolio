import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data'

export default function Portfolio() {
  const cats = ['All', 'Most hot', ...Array.from(new Set(projects.map((p) => p.cat)))]
  const [active, setActive] = useState('All')
  const shown = active === 'All'
    ? projects
    : active === 'Most hot'
      ? projects.filter((p) => (p.tags || []).includes('hot'))
      : projects.filter((p) => p.cat === active)
  return (
    <section id="portfolio" className="section">
      <span className="eyebrow">Portfolio</span>
      <h2 className="text-3xl font-bold md:text-4xl">Selected work</h2>
      <p className="mt-3 max-w-xl text-muted">AI & software projects — click any card to explore the source or live site.</p>
      <div className="mt-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              active === c
                ? 'border-accent bg-accent/10 text-accent'
                : 'border-white/10 text-slate-300 hover:border-accent hover:text-accent'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => {
          const isConfidential = !p.url
          const cardCls = `card group block overflow-hidden !p-0 ${isConfidential ? 'cursor-default' : ''}`
          return isConfidential ? (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={cardCls}
            >
              <div className="relative overflow-hidden">
                <img src={p.img} alt={p.name} className="h-44 w-full object-cover" />
                <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-ink/70 px-2.5 py-1 text-xs font-mono text-slate-300">Confidential</span>
              </div>
              <div className="p-5">
                <span className="text-xs font-mono text-accent">Confidential</span>
                <h3 className="mt-1 font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm text-muted">{p.desc}</p>
                <span className="mt-3 inline-block text-sm text-slate-500">In progress</span>
              </div>
            </motion.div>
          ) : (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card group block overflow-hidden !p-0"
            >
              <div className="overflow-hidden">
                <img src={p.img} alt={p.name} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="text-xs font-mono text-accent">{p.cat}</span>
                <h3 className="mt-1 font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm text-muted">{p.desc}</p>
                <span className="mt-3 inline-block text-sm text-accent">{p.url.includes('github.com') ? 'View source →' : 'Visit site →'}</span>
              </div>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}
