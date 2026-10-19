export default function About({ t }) {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-rio sm:text-5xl">{t.about.title}</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed">
            {t.about.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>

        <aside className="space-y-8 md:col-span-5 md:pt-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-rio">{t.about.education}</h3>
            <ul className="mt-4 space-y-4">
              {t.about.edu.map((e) => (
                <li key={e.title} className="border-l-2 border-arena pl-4">
                  <p className="font-semibold leading-snug">{e.title}</p>
                  <p className="text-sm text-gris">{e.place} — {e.status}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-rio">{t.about.languages}</h3>
            <p className="mt-2">{t.about.langs}</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
