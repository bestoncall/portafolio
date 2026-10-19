import { profile } from '../data/content'

export default function Hero({ t }) {
  return (
    <section id="inicio" className="relative overflow-hidden bg-rio text-papel">
      <div className="mx-auto max-w-6xl px-4 pb-28 pt-20 sm:px-6 sm:pt-28 md:pb-36">
        <p className="mb-6 flex items-center gap-2.5 text-sm text-papel/75">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-hoja opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-hoja" />
          </span>
          {t.hero.available}
        </p>

        <h1 className="font-display text-[clamp(3.2rem,11vw,8.5rem)] font-extrabold leading-[0.88] tracking-[-0.035em]">
          {profile.name}
        </h1>

        <p className="mt-6 font-display text-2xl font-semibold text-arena sm:text-3xl">
          {t.hero.role}
        </p>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-papel/80">
          {t.hero.intro}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#proyectos"
            className="rounded-full bg-arena px-6 py-3 font-semibold text-rio-deep transition-transform hover:-translate-y-0.5"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-papel/30 px-6 py-3 font-semibold text-papel transition-colors hover:bg-papel/10"
          >
            {t.hero.ctaContact}
          </a>
        </div>
      </div>

      {/* El río: la firma visual de la página */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-24 w-full md:h-32"
      >
        <path
          d="M0 120 C 180 60, 320 150, 520 100 S 860 30, 1040 90 S 1300 140, 1440 70 L1440 160 L0 160 Z"
          fill="var(--color-papel)"
        />
        <path
          className="river-path"
          d="M0 120 C 180 60, 320 150, 520 100 S 860 30, 1040 90 S 1300 140, 1440 70"
          fill="none"
          stroke="var(--color-arena)"
          strokeWidth="3"
        />
      </svg>
    </section>
  )
}
