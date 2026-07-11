import { motion } from 'framer-motion'

const icons = {
  robot: 'M12 2a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-.2A6 6 0 0 1 14 18v2h2a1 1 0 0 1 1 1v1H7v-1a1 1 0 0 1 1-1h2v-2a6 6 0 0 1-1.8-6H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2V4a2 2 0 0 1 2-2Z',
  lightning: 'M13 2 3 14h7l-1 8 10-12h-7l1-8Z',
  graph: 'M3 3v18h18M7 14l4-4 3 3 5-6',
  code: 'm8 6-6 6 6 6M16 6l6 6-6 6',
  database: 'M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3Zm8 4.5c0 1.7-3.6 3-8 3s-8-1.3-8-3M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3M4 15.5c0 1.7 3.6 3 8 3s8-1.3 8-3',
  mentor: 'M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c3 3 9 3 12 0v-5',
}

export default function Icon({ name, className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
         strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={icons[name] || icons.code} />
    </svg>
  )
}
