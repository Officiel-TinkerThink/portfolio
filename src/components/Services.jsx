import { motion } from 'framer-motion'
import { services } from '../data'
import Icon from './Icon'

export default function Services() {
  return (
    <section id="services" className="section">
      <span className="eyebrow">Services</span>
      <h2 className="text-3xl font-bold md:text-4xl">What I can build for you</h2>
      <p className="mt-3 max-w-xl text-muted">Fixed-scope or hourly — let's scope it together.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card group"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-ink">
              <Icon name={s.icon} />
            </div>
            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href="#contact" className="btn-primary">Start a project</a>
      </div>
    </section>
  )
}
