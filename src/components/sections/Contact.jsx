export default function Contact() {
  return (
    <section id="contact" className="min-w-[100vw] h-screen snap-start grid md:grid-cols-2 bg-[#FAFAF7]">
      <div className="order-2 md:order-1">
        <iframe
          title="Карта проезда"
          src="https://maps.google.com/maps?q=Pet%20grooming&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full min-h-[320px] border-0"
        />
      </div>
      <div className="order-1 md:order-2 flex items-center p-8 md:p-16">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Контакты и запись</h2>
          <div className="space-y-2 text-slate-700 mb-6">
            <p><strong>Адрес:</strong> Ул. Примерная, 1</p>
            <p><strong>Телефон:</strong> <a href="tel:+79991234567" className="text-emerald-700 hover:underline">+7 (999) 123-45-67</a></p>
            <p><strong>График:</strong> Ежедневно, 10:00 — 20:00</p>
          </div>
          <div className="bg-white rounded-2xl border border-emerald-900/10 p-4 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Онлайн-запись</h3>
            <p className="text-slate-600 mb-3">Выберите удобное время через виджет ниже.</p>
            <div className="aspect-video w-full">
              {/* Замените src на виджет вашего сервиса бронирования */}
              <iframe
                title="Онлайн-запись"
                src="https://youcanbook.me/"
                className="w-full h-full rounded-xl border"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
