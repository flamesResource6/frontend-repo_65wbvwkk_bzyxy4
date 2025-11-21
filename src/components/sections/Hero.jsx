export default function Hero() {
  return (
    <section id="hero" className="min-w-[100vw] h-screen snap-start flex items-center justify-center relative">
      <img
        src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop"
        alt="Счастливый пес после груминга"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-transparent" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <img src="/logo-paw.svg" alt="1 Лапа" className="w-6 h-6" />
          <span className="font-semibold tracking-wide">1 Лапа — груминг с любовью</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-md mb-4">Красота и забота для ваших любимцев</h1>
        <p className="text-lg md:text-xl text-white/90 mb-8">Мы помогаем собакам и кошкам выглядеть и чувствовать себя прекрасно — безопасно, бережно и с нежностью.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#contact" className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg">Записаться онлайн</a>
          <a href="#services" className="px-6 py-3 rounded-xl bg-white/90 hover:bg-white text-slate-900 font-semibold shadow-lg">Узнать подробности</a>
        </div>
      </div>
    </section>
  )
}
