const TEAM = [
  { name: 'Анна', role: 'Старший грумер', exp: '7 лет опыта', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop' },
  { name: 'Михаил', role: 'Грумер-стилист', exp: '5 лет опыта', img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop' },
  { name: 'Ольга', role: 'Специалист по кошкам', exp: '6 лет опыта', img: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=800&auto=format&fit=crop' },
]

export default function Team() {
  return (
    <section id="team" className="min-w-[100vw] h-screen snap-start flex items-center bg-[#FAFAF7]">
      <div className="w-full px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Наша команда</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((m) => (
            <div key={m.name} className="bg-white rounded-2xl border border-emerald-900/10 p-4 shadow-sm">
              <img src={m.img} alt={m.name} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-semibold text-slate-800">{m.name}</h3>
              <p className="text-emerald-700">{m.role}</p>
              <p className="text-slate-500 text-sm">{m.exp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
