import { motion } from 'framer-motion'
import { profile } from '../data'
import SocialIcon from './SocialIcon'

export default function Contact() {
  const mailto = () => {
    const subj = encodeURIComponent('Project inquiry')
    const body = encodeURIComponent('Hi Wahyu,\n\nI saw your portfolio and would like to discuss a project...\n\n')
    window.location.href = `mailto:${profile.email}?subject=${subj}&body=${body}`
  }
  return (
    <section id="contact" className="section">
      <span className="eyebrow">Contact</span>
      <h2 className="text-3xl font-bold md:text-4xl">Have a project? Let's talk.</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="card flex items-center"><SocialIcon name="geo" className="w-5 h-5 text-accent" /> <span className="ml-2">{profile.location}</span></div>
          <div className="card mt-3 flex items-center"><SocialIcon name="envelope" className="w-5 h-5 text-accent" /> <a className="ml-2 hover:text-accent" href={`mailto:${profile.email}`}>{profile.email}</a></div>
          <div className="card mt-3 flex items-center"><SocialIcon name="whatsapp" className="w-5 h-5 text-accent" /> <span className="ml-2">{profile.phone}</span></div>
          <button onClick={mailto} className="btn-primary mt-5">Email me directly →</button>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card space-y-3"
          onSubmit={(e) => { e.preventDefault(); mailto() }}
        >
          <input required placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-ink/60 px-4 py-3 outline-none focus:border-accent" />
          <input required type="email" placeholder="Your email" className="w-full rounded-lg border border-white/10 bg-ink/60 px-4 py-3 outline-none focus:border-accent" />
          <input required placeholder="Subject" className="w-full rounded-lg border border-white/10 bg-ink/60 px-4 py-3 outline-none focus:border-accent" />
          <textarea required rows="4" placeholder="Message" className="w-full rounded-lg border border-white/10 bg-ink/60 px-4 py-3 outline-none focus:border-accent" />
          <button type="submit" className="btn-primary w-full justify-center">Send Message</button>
          <p className="text-center text-xs text-muted">Opens your email app — no server needed.</p>
        </motion.form>
      </div>
    </section>
  )
}
