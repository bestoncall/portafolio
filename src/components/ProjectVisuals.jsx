import { Fragment } from 'react'

// Ilustraciones hechas con SVG/CSS para cada proyecto.
// Se "construyen" a medida que bajas: cada una recibe `step`, el paso de la historia
// que estás leyendo. step 0 = el problema (solo el boceto); step 1, 2, 3… = cada punto
// de "built" en content.js, en el mismo orden. Si cambias ese orden, cambia aquí también.

// Una pieza de la app. Antes de su paso se ve como un boceto punteado;
// cuando llega su paso, el boceto se desvanece y aparece la pieza real.
function Piece({ on, className = '', sketch = 'rounded-lg', children }) {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`absolute inset-0 border-2 border-dashed border-current transition-opacity duration-500 ${sketch} ${
          on ? 'opacity-0' : 'opacity-25'
        }`}
      />
      <div
        className={`h-full transition duration-700 ease-out motion-reduce:transition-none ${
          on ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

// Para que los elementos de una pieza aparezcan uno tras otro (solo al construir)
const delay = (on, ms) => ({ transitionDelay: on ? `${ms}ms` : '0ms' })

// AgroSoft · 1 roles · 2 registro diario · 3 curvas · 4 freemium · 5 despliegue
export function GrowthVisual({ step }) {
  const real = [10, 24, 40, 60, 84, 108, 128]
  const ideal = [14, 30, 50, 72, 94, 114, 132]
  const toPath = (arr) =>
    arr.map((v, i) => `${i === 0 ? 'M' : 'L'} ${20 + i * 46} ${150 - v}`).join(' ')
  const rows = [
    ['Lote 14', 'Día 45', '2,31 kg'],
    ['Lote 15', 'Día 31', '1,48 kg'],
    ['Lote 16', 'Día 12', '0,39 kg'],
  ]
  const records = step >= 2
  const chart = step >= 3
  const deploy = step >= 5

  return (
    <div aria-hidden="true" className="flex h-full flex-col gap-2.5 rounded-2xl bg-rio-deep p-4 text-papel sm:gap-3 sm:p-5">
      <div className="flex items-center justify-between gap-2">
        <span className="font-display text-sm font-extrabold sm:text-base">AgroSoft</span>
        <div className="flex items-center gap-2">
          <Piece on={step >= 4} sketch="rounded-full">
            <span className="flex rounded-full bg-papel/10 p-0.5 text-[10px] font-semibold sm:text-xs">
              <span className="px-2 py-0.5 text-papel/60">Free</span>
              <span className="rounded-full bg-arena px-2 py-0.5 text-rio-deep">Pro</span>
            </span>
          </Piece>
          <Piece on={step >= 1} sketch="rounded-full">
            <span className="flex gap-1 text-[10px] font-semibold sm:text-xs">
              <span className="rounded-full bg-hoja/30 px-2 py-0.5 text-[#CDE8C3]">Admin</span>
              <span className="rounded-full bg-papel/10 px-2 py-0.5">Operario</span>
            </span>
          </Piece>
        </div>
      </div>

      <Piece on={records}>
        <div className="space-y-1 rounded-lg bg-papel/5 p-2 text-[10px] sm:p-2.5 sm:text-xs">
          {rows.map(([lote, dia, peso], i) => (
            <div
              key={lote}
              style={delay(records, 150 + i * 150)}
              className={`grid grid-cols-3 transition duration-500 motion-reduce:transition-none ${
                records ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
              }`}
            >
              <span className="font-semibold">{lote}</span>
              <span className="text-papel/60">{dia}</span>
              <span className="text-right">{peso}</span>
            </div>
          ))}
        </div>
      </Piece>

      <Piece on={chart} className="min-h-0 flex-1">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between text-[10px] text-papel/70 sm:text-xs">
            <span>Lote 14 · semana 7</span>
            <span className="rounded-full bg-hoja/25 px-2 py-0.5 font-semibold text-[#A8D69A]">-3,1%</span>
          </div>
          <svg viewBox="0 0 320 160" className="mt-1 min-h-0 w-full flex-1">
            {[40, 80, 120].map((y) => (
              <line key={y} x1="20" x2="300" y1={y} y2={y} stroke="currentColor" strokeOpacity=".12" />
            ))}
            <path d={toPath(ideal)} fill="none" stroke="var(--color-arena)" strokeWidth="2" strokeDasharray="5 5" />
            {/* La curva real se dibuja de izquierda a derecha */}
            <path
              d={toPath(real)}
              pathLength="1"
              fill="none"
              stroke="#8FCB7C"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1"
              style={{ strokeDashoffset: chart ? 0 : 1, ...delay(chart, 200) }}
              className="transition-[stroke-dashoffset] duration-[1400ms] ease-out motion-reduce:transition-none"
            />
            {real.map((v, i) => (
              <circle
                key={i}
                cx={20 + i * 46}
                cy={150 - v}
                r="3.5"
                fill="#8FCB7C"
                style={delay(chart, 250 + i * 190)}
                className={`transition-opacity duration-300 motion-reduce:transition-none ${chart ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </svg>
          <div className="flex gap-5 text-[10px] text-papel/70 sm:text-xs">
            <span className="flex items-center gap-1.5"><span className="h-0.5 w-4 bg-[#8FCB7C]" />Real</span>
            <span className="flex items-center gap-1.5"><span className="h-0.5 w-4 border-t-2 border-dashed border-arena" />Ideal</span>
          </div>
        </div>
      </Piece>

      <Piece on={deploy}>
        <div className="flex items-center gap-1.5 text-[10px] font-semibold sm:text-xs">
          {[['Vercel', 'web'], ['Render', 'API'], ['Neon', 'DB']].map(([name, role], i) => (
            <Fragment key={name}>
              {i > 0 && (
                <span
                  style={delay(deploy, i * 300)}
                  className={`h-px flex-1 origin-left bg-papel/40 transition-transform duration-500 motion-reduce:transition-none ${
                    deploy ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              )}
              <span className="flex items-center gap-1.5 rounded-md bg-papel/10 px-2 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8FCB7C]" />
                {name}
                <span className="hidden font-normal text-papel/60 sm:inline">{role}</span>
              </span>
            </Fragment>
          ))}
        </div>
      </Piece>
    </div>
  )
}

// Lingua Path · 1 lecciones A1 · 2 inicio de sesión · 3 avatar · 4 puntos · 5 tienda
export function LessonsVisual({ step }) {
  const shop = [['🎩', 120], ['🕶️', 90], ['🧣', 60]]

  return (
    <div aria-hidden="true" className="flex h-full items-center justify-center rounded-2xl bg-[#DCE8E5] p-4 sm:p-6">
      <div className="flex aspect-[9/16] h-full max-h-[26rem] flex-col gap-2 rounded-[1.75rem] border-[5px] border-tinta bg-white p-3 text-tinta shadow-xl sm:gap-3 sm:p-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Piece on={step >= 3} sketch="rounded-full" className="h-8 w-8 shrink-0 sm:h-10 sm:w-10">
              <div className="relative flex h-full w-full items-center justify-center rounded-full bg-arena text-base sm:text-lg">
                🦊
                {/* Lo que compró en la tienda (paso 5) */}
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 text-sm transition duration-500 motion-reduce:transition-none ${
                    step >= 5 ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                  }`}
                  style={delay(step >= 5, 500)}
                >
                  🎩
                </span>
              </div>
            </Piece>
            <Piece on={step >= 2} sketch="rounded-md">
              <p className="text-[10px] leading-tight sm:text-xs">
                <span className="block font-bold">Ana</span>
                <span className="text-gris">A1</span>
              </p>
            </Piece>
          </div>
          <Piece on={step >= 4} sketch="rounded-full">
            <span className="block rounded-full bg-arena/20 px-2 py-0.5 text-[10px] font-bold text-[#8A6420] sm:text-xs">★ 340</span>
          </Piece>
        </div>

        <Piece on={step >= 1} className="min-h-0 flex-1">
          <div className="flex h-full flex-col">
            <p className="text-[9px] font-semibold text-gris sm:text-[11px]">Unit 3 · Lesson 2</p>
            <p className="mt-0.5 font-display text-xs font-bold leading-tight sm:text-lg">What time do you get up?</p>
            <div className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
              {['at 6:30', 'in 6:30', 'on 6:30'].map((o, i) => (
                <div
                  key={o}
                  className={`rounded-lg border-2 px-2 py-1 text-[10px] font-medium sm:rounded-xl sm:px-3 sm:py-1.5 sm:text-sm ${
                    i === 0 ? 'border-hoja bg-hoja/10 text-[#2F5E24]' : 'border-tinta/10'
                  }`}
                >
                  I get up {o}
                </div>
              ))}
            </div>
            {/* Con los puntos (paso 4) la barra de progreso avanza */}
            <div className="mt-auto h-1.5 overflow-hidden rounded-full bg-tinta/10 sm:h-2">
              <div
                className="h-full rounded-full bg-hoja transition-[width] duration-700 motion-reduce:transition-none"
                style={{ width: step >= 4 ? '66%' : '15%' }}
              />
            </div>
          </div>
        </Piece>

        <Piece on={step >= 5}>
          <div className="grid grid-cols-3 gap-1.5">
            {shop.map(([item, price]) => (
              <div key={item} className="rounded-lg bg-[#DCE8E5] py-1 text-center">
                <div className="text-sm sm:text-base">{item}</div>
                <div className="text-[9px] font-bold text-[#8A6420] sm:text-[11px]">★ {price}</div>
              </div>
            ))}
          </div>
        </Piece>
      </div>
    </div>
  )
}

// Matis Pink · 1 tienda para celular · 2 panel de administración · 3 pagos PSE y Bancolombia
export function StoreVisual({ step }) {
  const items = [
    ['#E9A3B8', 'Labial', '$32.000'],
    ['#C9846A', 'Base', '$58.000'],
    ['#B5677F', 'Rubor', '$27.000'],
    ['#F2C9B0', 'Iluminador', '$35.000'],
  ]
  const panel = step >= 2
  const paid = step >= 3
  const bars = [40, 65, 35, 80, paid ? 100 : 55]

  return (
    <div aria-hidden="true" className="flex h-full gap-3 rounded-2xl bg-[#F7E3EA] p-4 text-tinta sm:gap-4 sm:p-5">
      <div className="flex h-full w-[56%] flex-col rounded-[1.4rem] border-[5px] border-tinta bg-white p-2.5 sm:p-3">
        <Piece on={step >= 1} className="min-h-0 flex-1">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <span className="font-display text-xs font-extrabold text-[#9B2F57] sm:text-base">Matis Pink</span>
              <span className="rounded-full bg-[#F7E3EA] px-2 py-0.5 text-[10px] font-semibold text-[#9B2F57] sm:text-xs">🛍 2</span>
            </div>
            <div className="mt-2 grid min-h-0 flex-1 grid-cols-2 gap-1.5 sm:gap-2">
              {items.map(([c, n, p]) => (
                <div key={n} className="flex min-h-0 flex-col rounded-lg bg-[#FBF1F4] p-1.5">
                  <div className="min-h-0 flex-1 rounded-md" style={{ background: c }} />
                  <p className="mt-1 text-[9px] font-semibold sm:text-xs">{n}</p>
                  <p className="text-[9px] text-gris sm:text-xs">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </Piece>
        <Piece on={paid} className="mt-2">
          <div className="rounded-lg bg-[#9B2F57] py-1.5 text-center text-[10px] font-semibold text-white sm:text-sm">
            Pagar con PSE
          </div>
          <p className="mt-1 text-center text-[9px] text-gris sm:text-[11px]">o Bancolombia</p>
        </Piece>
      </div>

      <Piece on={panel} className="flex-1">
        <div className="flex h-full flex-col rounded-xl bg-white p-2.5 sm:p-3">
          <p className="text-[9px] font-semibold uppercase tracking-wide text-gris sm:text-[11px]">Panel</p>
          <p className="mt-1 text-[9px] text-gris sm:text-xs">Ventas hoy</p>
          <p className="font-display text-sm font-extrabold text-[#9B2F57] sm:text-xl">{paid ? '$184.000' : '$152.000'}</p>
          <div className="mt-2 flex min-h-8 flex-1 items-end gap-1">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-[#E9A3B8] transition-[height] duration-700 motion-reduce:transition-none"
                style={{ height: panel ? `${h}%` : '0%', ...delay(panel, 150 + i * 100) }}
              />
            ))}
          </div>
          {/* Cuando llega un pago (paso 3) aparece como venta nueva en el panel */}
          <ul className="space-y-1 pt-2 text-[9px] sm:text-xs">
            <li
              style={delay(paid, 400)}
              className={`flex justify-between rounded bg-hoja/15 px-1 font-semibold text-[#2F5E24] transition duration-500 motion-reduce:transition-none ${
                paid ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
              }`}
            >
              <span>#1042 · PSE</span>
              <span>$32.000</span>
            </li>
            <li className="flex justify-between px-1"><span>#1041</span><span>$58.000</span></li>
            <li className="flex justify-between px-1"><span>#1040</span><span>$27.000</span></li>
          </ul>
        </div>
      </Piece>
    </div>
  )
}

export const visuals = { growth: GrowthVisual, lessons: LessonsVisual, store: StoreVisual }
