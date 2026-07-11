import { motion } from 'framer-motion'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <span className="eyebrow">Skills</span>
      <h2 className="text-3xl font-bold md:text-4xl">Languages, frameworks & platforms</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {skills.map((g, i) => (
          <motion.div
            key={g.group}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card"
          >
            <h3 className="mb-3 font-mono text-accent">{g.group}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">{it}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
