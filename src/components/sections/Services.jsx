import { useState } from 'react'
import { Scissors, ShowerHead, Brush, Sparkles, Check } from 'lucide-react'

const SERVICES = [
  {
    id: 'cut',
    title: 'Стрижка',
    icon: Scissors,
    desc: 'Модельные и гигиенические стрижки с учетом породы и желаний владельца.',
    price: 'от 1800 ₽'
  },
  {
    id: 'wash',
    title: 'Мытье и уход',
    icon: ShowerHead,
    desc: 'Деликатное мытье, бальзам, сушka и расчесывание премиум-средствами.',
    price: 'от 900 ₽'
  },
  {
    id: 'trimming',
    title: 'Тримминг',
    icon: Brush,
    desc: 'Профессиональный тримминг для жесткошерстных пород.',
    price: 'от 2200 ₽'
  },
  {
    id: 'hygiene',
    title: 'Гигиенический уход',
    icon: Sparkles,
    desc: 'Стрижка когтей, чистка ушей и зубов, обработка подушечек лап.',
    price: 'от 600 ₽'
  }
]

export default function Services() {
  const [active, setActive] = useState(SERVICES[0])

  return (
    <section id="services" className="min-w-[100vw] h-screen snap-start flex items-center bg-[#FAFAF7]">
      <div className="w-full px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Услуги</h2>
        <div className="flex overflow-x-auto gap-4 pb-2 -mb-2 snap-x">
          {SERVICES.map((s) => (
            <button key={s.id} onClick={() => setActive(s)} className={`snap-start shrink-0 min-w-[220px] text-left p-4 rounded-2xl border bg-white shadow-sm transition-all ${active.id === s.id ? 'border-emerald-600 ring-2 ring-emerald-200' : 'border-emerald-900/10 hover:border-emerald-600/40'}`}>
              <div className="flex items-center gap-3">
                <s.icon className="w-6 h-6 text-emerald-700" />
                <div>
                  <p className="font-semibold text-slate-800">{s.title}</p>
                  <p className="text-sm text-slate-500">{s.price}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-emerald-900/10 p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">{active.title}</h3>
            <p className="text-slate-600 mb-4">{active.desc}</p>
            <div className="flex items-center gap-2 text-emerald-700"><Check className="w-4 h-4" /> Индивидуальный подход</div>
            <div className="flex items-center gap-2 text-emerald-700"><Check className="w-4 h-4" /> Премиум-уход</div>
            <div className="flex items-center gap-2 text-emerald-700"><Check className="w-4 h-4" /> Без стресса</div>
          </div>
          <img src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1200&auto=format&fit=crop" alt={active.title} className="w-full h-64 md:h-full object-cover rounded-2xl" />
        </div>
      </div>
    </section>
  )
}
