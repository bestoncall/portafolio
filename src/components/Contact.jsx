import { useState } from 'react'
import { profile } from '../data/content'

export default function Contact({ t }) {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { /* el navegador no permitió copiar */ }
  }

  const extra = [
    ['GitHub', profile.github],
    ['LinkedIn', profile.linkedin],
    ['CV', profile.cv],
  ].filter(([, href]) => href)

  return (
    <section id="contacto" className="bg-arena">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-rio-deep sm:text-6xl">
          {t.contact.title}
        </h2>
        <p className="mt-5 max-w-xl text-lg text-rio-deep/80">{t.contact.body}</p>

        <p className="mt-8 break-all font-display text-xl font-semibold text-rio-deep sm:text-2xl">{profile.email}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="rounded-full bg-rio-deep px-6 py-3 font-semibold text-papel hover:bg-rio">
            {t.contact.email}
          </a>
          <button onClick={copyEmail} className="rounded-full border-2 border-rio-deep/40 px-6 py-3 font-semibold text-rio-deep hover:bg-rio-deep/5">
            <span aria-live="polite">{copied ? t.contact.copied : t.contact.copy}</span>
          </button>
          {extra.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="rounded-full border-2 border-rio-deep/40 px-6 py-3 font-semibold text-rio-deep hover:bg-rio-deep/5">
              {label}
            </a>
          ))}
        </div>

        <p className="mt-20 text-sm text-rio-deep/60">© {new Date().getFullYear()} {profile.name}. {t.footer}</p>
      </div>
    </section>
  )
}
