import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { demos } from '../data'

/**
 * Live, embedded demos. Every project is a static app on the same GitHub Pages origin,
 * so it runs right here in an iframe — only the selected one is loaded.
 * Other components open a demo with:  window.dispatchEvent(new CustomEvent('open-demo', { detail: id }))
 */
export default function Playground() {
  const [activeId, setActiveId] = useState(() => {
    const m = /demo=([a-z]+)/.exec(window.location.hash)
    return m && demos.some((d) => d.id === m[1]) ? m[1] : demos[0].id
  })
  const [loaded, setLoaded] = useState(false)
  const [started, setStarted] = useState(false)     // the iframe is only created after the first user intent
  const [tall, setTall] = useState(false)
  const frameWrap = useRef(null)
  const sectionRef = useRef(null)
  const active = demos.find((d) => d.id === activeId)

  useEffect(() => {
    const onOpen = (e) => {
      const id = e.detail
      if (!demos.some((d) => d.id === id)) return
      setActiveId(id); setStarted(true); setLoaded(false)
      setTimeout(() => sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
    }
    window.addEventListener('open-demo', onOpen)
    return () => window.removeEventListener('open-demo', onOpen)
  }, [])

  // start loading automatically once the section scrolls into view
  useEffect(() => {
    const el = sectionRef.current
    if (!el || started) return
    const io = new IntersectionObserver((entries) => { if (entries.some((x) => x.isIntersecting)) { setStarted(true); io.disconnect() } }, { rootMargin: '200px' })
    io.observe(el)
    return () => io.disconnect()
  }, [started])

  const select = (id) => { if (id === activeId) return; setActiveId(id); setLoaded(false); setStarted(true) }
  const fullscreen = () => { const el = frameWrap.current; if (!el) return; (el.requestFullscreen || el.webkitRequestFullscreen)?.call(el) }

  return (
    <section id="playground" ref={sectionRef} className="section scroll-mt-20">
      <span className="eyebrow">Playground</span>
      <h2 className="text-3xl font-bold md:text-4xl">Don't read about it — <span className="gradient-text">try it</span></h2>
      <p className="mt-3 max-w-2xl text-muted">
        Seven of my projects run entirely in the browser, so they run right here. Pick one, play with it, then look at the source.
        Each has its own tests, a demo video and a write-up on GitHub.
      </p>

      <div className="mt-8 grid gap-5 grid-cols-[minmax(0,1fr)]">
        {/* ---------- picker ---------- */}
        <div className="flex min-w-0 gap-3 overflow-x-auto pb-2 [scrollbar-width:thin]">
          {demos.map((d) => {
            const on = d.id === activeId
            return (
              <button
                key={d.id}
                onClick={() => select(d.id)}
                className={`group flex w-[230px] shrink-0 items-center gap-3 rounded-2xl border p-3 text-left transition ${on ? 'border-accent/60 bg-accent/10' : 'border-white/10 bg-panel/60 hover:border-white/25'}`}
              >
                <span className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border border-white/10">
                  <img src={d.img} alt="" className="h-full w-full object-cover object-top" loading="lazy" />
                </span>
                <span className="min-w-0">
                  <span className={`block truncate text-sm font-semibold ${on ? 'text-accent' : 'text-white'}`}>{d.name}</span>
                  <span className="block truncate text-xs text-muted">{d.kicker}</span>
                </span>
              </button>
            )
          })}
        </div>

        {/* ---------- stage ---------- */}
        <div className="min-w-0">
          <div ref={frameWrap} className="relative overflow-hidden rounded-2xl border border-white/10 bg-panel shadow-[0_20px_60px_-20px_rgba(0,229,255,0.25)]">
            {/* browser chrome */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-ink/80 px-4 py-2.5">
              <span className="flex gap-1.5">
                <i className="h-3 w-3 rounded-full bg-[#ff5f57]" /><i className="h-3 w-3 rounded-full bg-[#febc2e]" /><i className="h-3 w-3 rounded-full bg-[#28c840]" />
              </span>
              <span className="min-w-0 flex-1 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-xs text-slate-400">{active.url}</span>
              <button onClick={() => setTall((t) => !t)} className="hidden rounded-md border border-white/10 px-2 py-1 text-xs text-slate-300 hover:border-accent hover:text-accent md:inline-block" title="Toggle height">{tall ? 'Shorter' : 'Taller'}</button>
              <button onClick={fullscreen} className="rounded-md border border-white/10 px-2 py-1 text-xs text-slate-300 hover:border-accent hover:text-accent" title="Fullscreen">⤢ Fullscreen</button>
              <a href={active.url} target="_blank" rel="noreferrer" className="rounded-md bg-accent px-2 py-1 text-xs font-semibold text-ink hover:brightness-110" title="Open in a new tab">Open ↗</a>
            </div>

            <div className={`relative bg-black/40 transition-[height] duration-300 ${tall ? 'h-[920px]' : 'h-[600px] md:h-[760px]'}`}>
              {started && (
                <iframe
                  key={active.id}
                  src={active.url}
                  title={active.name}
                  className="h-full w-full bg-white"
                  loading="lazy"
                  allow="fullscreen; autoplay; clipboard-write"
                  onLoad={() => setLoaded(true)}
                />
              )}
              <AnimatePresence>
                {(!started || !loaded) && (
                  <motion.div
                    key="poster"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center bg-ink"
                  >
                    <img src={active.img} alt={active.name} className="absolute inset-0 h-full w-full object-cover object-top opacity-40 blur-[1px]" />
                    <button onClick={() => setStarted(true)} className="btn-primary relative z-10">
                      {started ? <span className="flex items-center gap-2"><span className="h-3 w-3 animate-ping rounded-full bg-ink" /> Loading {active.name}…</span> : `▶ Load ${active.name}`}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ---------- about the active demo ---------- */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-5 grid gap-5 md:grid-cols-[1fr_260px]"
            >
              <div>
                <h3 className="text-xl font-semibold text-white">{active.name} <span className="font-normal text-muted">— {active.kicker}</span></h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{active.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.stack.map((s) => <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-300">{s}</span>)}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={active.repo} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2 text-sm">Source on GitHub →</a>
                  <a href={active.url} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2 text-sm">Open full app ↗</a>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-panel/60 p-4">
                <div className="text-xs font-mono uppercase tracking-widest text-accent">Things to try</div>
                <ul className="mt-2 space-y-2 text-sm text-slate-300">
                  {active.tips.map((t) => <li key={t} className="flex gap-2"><span className="text-accent">▸</span><span>{t}</span></li>)}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
