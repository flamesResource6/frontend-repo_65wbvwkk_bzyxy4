import { useState } from 'react'
import { Menu, X, PawPrint, Phone, CalendarDays, Images, Info, Users, MessageSquare } from 'lucide-react'

const links = [
  { id: 'hero', label: 'Главная', icon: PawPrint },
  { id: 'about', label: 'О нас', icon: Info },
  { id: 'services', label: 'Услуги', icon: CalendarDays },
  { id: 'team', label: 'Команда', icon: Users },
  { id: 'gallery', label: 'Галерея', icon: Images },
  { id: 'testimonials', label: 'Отзывы', icon: MessageSquare },
  { id: 'contact', label: 'Контакты', icon: Phone },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-2 bg-white/80 backdrop-blur-md border border-emerald-900/10 shadow-lg rounded-2xl p-3">
        {links.map(({ id, label, icon: Icon }) => (
          <a key={id} href={`#${id}`} className="group inline-flex items-center gap-3 px-3 py-2 rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">
            <Icon className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-sm">{label}</span>
          </a>
        ))}
      </nav>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-4 left-4 right-4 z-50 flex items-center justify-between bg-white/90 backdrop-blur border border-emerald-900/10 rounded-2xl px-4 py-3 shadow-md">
        <div className="flex items-center gap-2">
          <img src="/logo-paw.svg" alt="1 Лапа" className="w-6 h-6" />
          <span className="font-semibold text-slate-800">1 Лапа</span>
        </div>
        <button aria-label="Меню" onClick={() => setOpen(v => !v)} className="p-2 rounded-lg hover:bg-emerald-50 text-slate-700">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed top-20 left-4 right-4 z-40 bg-white rounded-2xl border border-emerald-900/10 shadow-xl p-3">
          {links.map(({ id, label, icon: Icon }) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">
              <Icon className="w-5 h-5 text-emerald-600" />
              <span className="font-medium">{label}</span>
            </a>
          ))}
        </div>
      )}
    </>
  )
}
