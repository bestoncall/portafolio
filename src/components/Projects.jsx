import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/content'
import { visuals } from './ProjectVisuals'

// Si la persona pidió "reducir movimiento" en su sistema, mostramos todo ya armado
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Devuelve qué paso de la historia está cruzando la "línea de lectura" de la pantalla
function useActiveStep() {
  const refs = useRef([])
  const [step, setStep] = useState(0)

  useEffect(() => {
    // En celular la maqueta tapa la parte de arriba, así que la línea va más abajo.
    // La línea mide 1% de alto: si fuera de 0, al redondear píxeles podría quedar negativa.
    const wide = window.matchMedia('(min-width: 768px)').matches
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setStep(Number(e.target.dataset.step))),
      { rootMargin: wide ? '-50% 0px -49% 0px' : '-62% 0px -37% 0px' },
    )
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return [step, refs]
}

function ProjectStory({ p, t, lang, flip }) {
  const c = p[lang]
  const Visual = visuals[p.visual]
  const total = c.built.length
  const [active, refs] = useActiveStep()
  const step = reduceMotion ? total : active

  // Cada paso ocupa buena parte de la pantalla; el que estás leyendo se ve fuerte
  const stepProps = (i) => ({
    ref: (el) => { refs.current[i] = el },
    'data-step': i,
    className: `flex min-h-[55svh] flex-col justify-center py-8 transition-opacity duration-500 md:min-h-[65svh] ${
      reduceMotion || i === step ? '' : 'opacity-25'
    }`,
  })

  return (
    <article className="md:grid md:grid-cols-12 md:gap-14">
      {/* La maqueta se queda fija mientras pasa la historia */}
      <div
        className={`sticky top-14 z-10 bg-papel py-3 md:col-span-6 md:flex md:h-[calc(100svh-3.5rem)] md:items-center md:self-start md:bg-transparent md:py-0 ${
          flip ? 'md:order-2' : ''
        }`}
      >
        <div className="w-full">
          <div className="h-[clamp(280px,42svh,380px)] md:aspect-[4/3.3] md:h-auto">
            <Visual step={step} />
          </div>
          <ol className="mt-3 flex gap-1.5" aria-hidden="true">
            {c.built.map((b, k) => (
              <li
                key={k}
                className={`h-1 flex-1 rounded-full transition-colors duration-500 ${step > k ? 'bg-arena' : 'bg-rio/15'}`}
              />
            ))}
          </ol>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-full h-6 bg-linear-to-b from-papel md:hidden" />
      </div>

      <div className={`md:col-span-6 ${flip ? 'md:order-1' : ''}`}>
        <div {...stepProps(0)}>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-hoja/15 px-3 py-1 text-xs font-semibold text-[#3B6E2E]">
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2 6.5l2.5 2.5L10 3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {t.projects.client}
          </span>

          <h3 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{p.name}</h3>
          <p className="mt-1 text-lg font-medium text-gris">{c.tagline}</p>

          <h4 className="mt-7 text-sm font-semibold text-rio">{t.projects.problem}</h4>
          <p className="mt-1.5 text-lg leading-relaxed">{c.problem}</p>
        </div>

        {/* key = número del paso (no el texto) para que al cambiar de idioma no se pierda el seguimiento */}
        {c.built.map((b, k) => (
          <div key={k} {...stepProps(k + 1)}>
            <h4 className="text-sm font-semibold text-rio">
              {t.projects.built} · {k + 1}/{total}
            </h4>
            <p className="mt-2 font-display text-2xl font-semibold leading-snug sm:text-3xl">{b}</p>

            {k + 1 === total && (
              <>
                <ul className="mt-8 flex flex-wrap gap-2" aria-label="Stack">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded-md bg-rio/8 px-2.5 py-1 text-sm font-medium text-rio">{s}</li>
                  ))}
                </ul>

                {(p.repo || p.live) && (
                  <div className="mt-7 flex flex-wrap gap-3">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="rounded-full bg-rio px-5 py-2.5 text-sm font-semibold text-papel hover:bg-rio-deep">
                        {t.projects.live}
                      </a>
                    )}
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer" className="rounded-full border border-rio/30 px-5 py-2.5 text-sm font-semibold text-rio hover:bg-rio/5">
                        {t.projects.code}
                      </a>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </article>
  )
}

export default function Projects({ t, lang }) {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <h2 className="font-display text-4xl font-extrabold tracking-tight text-rio sm:text-5xl">
        {t.projects.title}
      </h2>
      <p className="mt-4 max-w-xl text-lg text-gris">{t.projects.lead}</p>

      <div className="mt-12 space-y-16 md:space-y-24">
        {projects.map((p, i) => (
          <ProjectStory key={p.id} p={p} t={t} lang={lang} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  )
}
