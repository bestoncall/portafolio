import { useEffect, useState } from 'react'
import { ui } from './data/content'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Stack from './components/Stack'
import About from './components/About'
import Contact from './components/Contact'

function getInitialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'es' || saved === 'en') return saved
  } catch { /* sin localStorage: seguimos */ }
  return navigator.language?.startsWith('es') ? 'es' : 'en'
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang)
  const t = ui[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch { /* ignorar */ }
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'))

  return (
    <>
      <Header t={t} onToggleLang={toggleLang} />
      <main>
        <Hero t={t} />
        <Projects t={t} lang={lang} />
        <Stack t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>
    </>
  )
}
