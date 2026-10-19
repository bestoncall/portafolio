import { stack } from '../data/content'

export default function Stack({ t }) {
  return (
    <section id="stack" className="bg-rio-deep text-papel">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{t.stack.title}</h2>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {Object.entries(stack).map(([key, items]) => (
            <div key={key} className="border-t-2 border-arena pt-4">
              <h3 className="font-display text-xl font-semibold text-arena">{t.stack.groups[key]}</h3>
              <ul className="mt-4 space-y-2 text-papel/85">
                {items.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
