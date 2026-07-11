import { profile } from '../data'
import SocialIcon from './SocialIcon'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted md:flex-row">
        <p>© {new Date().getFullYear()} <span className="text-white">{profile.name}</span> · {profile.brand}. All rights reserved.</p>
        <div className="flex gap-4">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="transition hover:text-accent"><SocialIcon name="github" /></a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-accent"><SocialIcon name="linkedin" /></a>
          <a href={profile.socials.medium} target="_blank" rel="noreferrer" className="transition hover:text-accent"><SocialIcon name="medium" /></a>
        </div>
      </div>
    </footer>
  )
}
