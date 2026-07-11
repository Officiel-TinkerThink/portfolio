import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data'

export default function Portfolio() {
  const cats = ['All', ...Array.from(new Set(projects.map((p) => p.cat)))]
  const [active, setActive] = useState('All')
  const shown = active === 'All' ? projects : projects.filter((p) => p.cat === active)
  return (
    <section id="portfolio" className="section">
      <span className="eyebrow">Portfolio</span>
      <h2 className="text-3xl font-bold md:text-4xl">Selected work</h2>
      <p className="mt-3 max-w-xl text-muted">AI & software projects — each links to the source.</p>
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
        {shown.map((p, i) => (
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
              <span className="mt-3 inline-block text-sm text-accent">View source →</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
