import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { demos } from '../data'

/**
 * On-demand demo viewer. Nothing renders until something dispatches
 *   window.dispatchEvent(new CustomEvent('open-demo', { detail: id }))
 * (the LIVE project cards do). The app then loads in an iframe inside a full-screen overlay.
 */
export default function DemoModal() {
  const [id, setId] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const frameWrap = useRef(null)
  const active = demos.find((d) => d.id === id)

  useEffect(() => {
    const onOpen = (e) => { if (demos.some((d) => d.id === e.detail)) { setLoaded(false); setId(e.detail) } }
    const onKey = (e) => { if (e.key === 'Escape') setId(null) }
    window.addEventListener('open-demo', onOpen)
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('open-demo', onOpen); window.removeEventListener('keydown', onKey) }
  }, [])

  useEffect(() => {
    document.body.style.overflow = id ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [id])

  const close = () => setId(null)
  const fullscreen = () => { const el = frameWrap.current; if (el) (el.requestFullscreen || el.webkitRequestFullscreen)?.call(el) }

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="demo-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-3 backdrop-blur-sm md:p-6"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.name}
        >
          <motion.div
            initial={{ scale: 0.96, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            className="flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* header */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-ink/80 px-4 py-2.5">
              <span className="hidden gap-1.5 sm:flex">
                <i className="h-3 w-3 rounded-full bg-[#ff5f57]" /><i className="h-3 w-3 rounded-full bg-[#febc2e]" /><i className="h-3 w-3 rounded-full bg-[#28c840]" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold text-white">{active.name} <span className="font-normal text-muted">— {active.kicker}</span></div>
                <div className="truncate font-mono text-[11px] text-slate-500">{active.url}</div>
              </div>
              <a href={active.repo} target="_blank" rel="noreferrer" className="hidden rounded-md border border-white/10 px-2 py-1 text-xs text-slate-300 hover:border-accent hover:text-accent sm:inline-block">Source</a>
              <button onClick={fullscreen} className="hidden rounded-md border border-white/10 px-2 py-1 text-xs text-slate-300 hover:border-accent hover:text-accent sm:inline-block">⤢ Fullscreen</button>
              <a href={active.url} target="_blank" rel="noreferrer" className="rounded-md bg-accent px-2 py-1 text-xs font-semibold text-ink hover:brightness-110">Open ↗</a>
              <button onClick={close} className="ml-1 rounded-md border border-white/10 px-2 py-1 text-xs text-slate-300 hover:border-white/40 hover:text-white" aria-label="Close">✕</button>
            </div>

            {/* stage */}
            <div ref={frameWrap} className="relative min-h-0 flex-1 bg-black/40">
              <iframe
                key={active.id}
                src={active.url}
                title={active.name}
                className="h-full w-full bg-white"
                allow="fullscreen; autoplay; clipboard-write"
                onLoad={() => setLoaded(true)}
              />
              {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-ink">
                  <img src={active.img} alt="" className="absolute inset-0 h-full w-full object-cover object-top opacity-30 blur-[1px]" />
                  <span className="relative flex items-center gap-2 rounded-full bg-ink/80 px-4 py-2 text-sm text-slate-200"><span className="h-2.5 w-2.5 animate-ping rounded-full bg-accent" /> Loading {active.name}…</span>
                </div>
              )}
            </div>

            {/* footer: tips */}
            <div className="hidden items-center gap-4 border-t border-white/10 bg-ink/60 px-4 py-2 text-xs text-slate-400 md:flex">
              <span className="font-mono uppercase tracking-widest text-accent">Try</span>
              <span className="truncate">{active.tips.join('  ·  ')}</span>
              <span className="ml-auto shrink-0 text-slate-600">Esc to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
