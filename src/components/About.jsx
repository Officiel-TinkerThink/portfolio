import { motion } from 'framer-motion'
import { profile } from '../data'

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function About() {
  return (
    <section id="about" className="section">
      <span className="eyebrow">About</span>
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <motion.div {...reveal}>
          <h2 className="text-3xl font-bold md:text-4xl">Building intelligent software, end to end.</h2>
          <p className="mt-4 text-muted">{profile.summary}</p>
          <p className="mt-4 text-muted">
            My background blends mechanical-engineering rigour with hands-on data science and AI product work.
            I led a newly formed AI team exploring LLM & Agentic AI, and I love taking an ambiguous idea from
            notebook to a working, deployed prototype.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="card"><span className="text-accent">Role</span><p className="text-slate-300">AI Engineer / Software Developer</p></div>
            <div className="card"><span className="text-accent">Location</span><p className="text-slate-300">{profile.location}</p></div>
            <div className="card"><span className="text-accent">Focus</span><p className="text-slate-300">LLM · Agents · ML · Web Apps</p></div>
            <div className="card"><span className="text-accent">Status</span><p className="text-slate-300">Open for projects</p></div>
          </div>
        </motion.div>
        <motion.div {...reveal} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <img src="/portfolio/img/profile.jpg" alt="Wahyu Bornok" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
