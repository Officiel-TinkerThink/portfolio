import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data'

export default function Portfolio() {
  const fixedCats = ['AI Agents', 'AI Games', 'Machine Learning', 'Data', 'Apps']
  const presentCats = Array.from(new Set(projects.flatMap((p) => p.cats || [p.cat])))
  const cats = ['All', 'Live demos', 'Most hot', ...fixedCats.filter((c) => presentCats.includes(c))]
  const [active, setActive] = useState('All')
  const shown = active === 'All'
    ? projects
    : active === 'Live demos'
      ? projects.filter((p) => p.demo)
    : active === 'Most hot'
      ? projects.filter((p) => (p.tags || []).includes('hot'))
      : projects.filter((p) => (p.cats || [p.cat]).includes(active))
  return (
    <section id="portfolio" className="section">
      <span className="eyebrow">Portfolio</span>
      <h2 className="text-3xl font-bold md:text-4xl">Selected work</h2>
      <p className="mt-3 max-w-xl text-muted">AI & software projects. Cards marked <span className="font-mono text-accent">LIVE</span> open in the playground above; the rest link to the source or site.</p>
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
          ) : p.demo ? (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card group block cursor-pointer overflow-hidden !p-0"
              onClick={() => window.dispatchEvent(new CustomEvent('open-demo', { detail: p.demo }))}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') window.dispatchEvent(new CustomEvent('open-demo', { detail: p.demo })) }}
            >
              <div className="relative overflow-hidden">
                <img src={p.img} alt={p.name} className="h-44 w-full object-cover object-top transition duration-500 group-hover:scale-105" loading="lazy" />
                <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-ink/80 px-2.5 py-1 text-xs font-mono text-accent"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />LIVE</span>
                <span className="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 transition group-hover:opacity-100"><span className="btn-primary !px-4 !py-2 text-sm">▶ Play in the playground</span></span>
              </div>
              <div className="p-5">
                <span className="text-xs font-mono text-accent">{(p.cats || [p.cat])[0]}</span>
                <h3 className="mt-1 font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm text-muted">{p.desc}</p>
                <span className="mt-3 flex gap-4 text-sm">
                  <span className="text-accent">Try it live →</span>
                  <a href={p.url} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="text-slate-400 hover:text-accent">Source</a>
                </span>
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
                <img src={p.img} alt={p.name} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5">
                <span className="text-xs font-mono text-accent">{(p.cats || [p.cat])[0]}</span>
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
