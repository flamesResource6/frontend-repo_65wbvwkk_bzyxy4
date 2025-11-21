export default function About() {
  return (
    <section id="about" className="min-w-[100vw] h-screen snap-start grid md:grid-cols-2">
      <div className="relative order-2 md:order-1">
        <img src="https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1400&auto=format&fit=crop" alt="Грумер заботится о собаке" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-emerald-900/10" />
      </div>
      <div className="order-1 md:order-2 flex items-center bg-[#FAFAF7]">
        <div className="px-8 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">О салоне</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Мы — команда профессионалов, для которых груминг — это не просто работа, а искренняя любовь к животным. В нашем салоне мы создаем спокойную атмосферу, чтобы каждый питомец чувствовал себя безопасно и уютно.</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
            <li className="bg-white rounded-xl p-4 shadow-sm border border-emerald-900/10">Опытные мастера с профильным обучением</li>
            <li className="bg-white rounded-xl p-4 shadow-sm border border-emerald-900/10">Деликатный подход и любовь к каждому хвостику</li>
            <li className="bg-white rounded-xl p-4 shadow-sm border border-emerald-900/10">Безопасные сертифицированные средства</li>
            <li className="bg-white rounded-xl p-4 shadow-sm border border-emerald-900/10">Уютная обстановка и стерильность</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
