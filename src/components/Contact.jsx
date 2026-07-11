import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'
import SocialIcon from './SocialIcon'

const mailto = () => {
  const subj = encodeURIComponent('Project inquiry')
  const body = encodeURIComponent('Hi Wahyu,\n\nI saw your portfolio and would like to discuss a project...\n\n')
  window.location.href = `mailto:${profile.email}?subject=${subj}&body=${body}`
}

const waNumber = profile.phone.replace(/[^\d]/g, '')
const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hi Wahyu, I saw your portfolio and would like to discuss a project.')}`

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!profile.contactFormKey || profile.contactFormKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      setStatus('error')
      return
    }
    setStatus('sending')
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: profile.contactFormKey, ...data }),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <span className="eyebrow">Contact</span>
      <h2 className="text-3xl font-bold md:text-4xl">Have a project? Let's talk.</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="card flex items-center"><SocialIcon name="geo" className="w-5 h-5 text-accent" /> <span className="ml-2">{profile.location}</span></div>
          <div className="card mt-3 flex items-center"><SocialIcon name="envelope" className="w-5 h-5 text-accent" /> <a className="ml-2 hover:text-accent" href={`mailto:${profile.email}`}>{profile.email}</a></div>
          <div className="card mt-3 flex items-center"><SocialIcon name="whatsapp" className="w-5 h-5 text-accent" /> <a className="ml-2 hover:text-accent" href={waLink} target="_blank" rel="noreferrer">{profile.phone}</a></div>
          <button onClick={mailto} className="btn-primary mt-5">Email me directly →</button>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card space-y-3"
          onSubmit={onSubmit}
        >
          <input required name="name" placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-ink/60 px-4 py-3 outline-none focus:border-accent" />
          <input required type="email" name="email" placeholder="Your email" className="w-full rounded-lg border border-white/10 bg-ink/60 px-4 py-3 outline-none focus:border-accent" />
          <input required name="subject" placeholder="Subject" className="w-full rounded-lg border border-white/10 bg-ink/60 px-4 py-3 outline-none focus:border-accent" />
          <textarea required rows="4" name="message" placeholder="Message" className="w-full rounded-lg border border-white/10 bg-ink/60 px-4 py-3 outline-none focus:border-accent" />
          <input type="hidden" name="to" value={profile.email} />
          <input type="hidden" name="from_name" value="Portfolio Contact Form" />
          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center">
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'sent' && <p className="text-center text-sm text-accent">✓ Message sent — I'll get it by email.</p>}
          {status === 'error' && <p className="text-center text-sm text-red-400">Couldn't send. Please email me directly at {profile.email}.</p>}
        </motion.form>
      </div>
    </section>
  )
}
