import { motion } from 'framer-motion'
import { experience, education, certs } from '../data'

export default function Resume() {
  return (
    <section id="resume" className="section">
      <span className="eyebrow">Resume</span>
      <h2 className="text-3xl font-bold md:text-4xl">Experience & education</h2>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="mb-4 font-mono text-accent">Experience</h3>
          {experience.map((e) => (
            <div key={e.role + e.org} className="card mb-4">
              <h4 className="font-semibold text-white">{e.role}</h4>
              <p className="text-sm text-accent">{e.org} · {e.loc}</p>
              <p className="text-xs text-muted">{e.period}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                {e.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <h3 className="mb-4 font-mono text-accent">Education</h3>
          {education.map((e) => (
            <div key={e.school} className="card mb-4">
              <h4 className="font-semibold text-white">{e.school}</h4>
              <p className="text-sm text-slate-300">{e.degree}</p>
              <p className="text-xs text-muted">{e.period}</p>
            </div>
          ))}
          <h3 className="mb-4 mt-8 font-mono text-accent">Certifications</h3>
          <div className="card">
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
              {certs.map((c) => (
                <li key={c.name}>
                  <a className="hover:text-accent" href={c.url} target="_blank" rel="noreferrer">{c.name} ↗</a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
