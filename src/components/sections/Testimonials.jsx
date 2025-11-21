const ITEMS = [
  { source: 'Google', text: 'Очень внимательные мастера! Собака не стрессовала, результат потрясающий.', author: 'Ирина' },
  { source: 'Instagram', text: 'Быстро, аккуратно и очень красиво. Будем приходить ещё!', author: 'Антон' },
  { source: 'Яндекс.Карты', text: 'Лучший груминг в городе. Чисто, уютно, цены адекватные.', author: 'Мария' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="min-w-[100vw] h-screen snap-start flex items-center bg-[#FAFAF7]">
      <div className="w-full px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Отзывы</h2>
        <div className="flex overflow-x-auto gap-4 snap-x pb-2 -mb-2">
          {ITEMS.map((it, i) => (
            <div key={i} className="snap-start shrink-0 w-[320px] bg-white rounded-2xl border border-emerald-900/10 p-5 shadow-sm">
              <div className="text-sm text-emerald-700 font-semibold mb-2">{it.source}</div>
              <p className="text-slate-700 mb-3">“{it.text}”</p>
              <div className="text-slate-500 text-sm">— {it.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
