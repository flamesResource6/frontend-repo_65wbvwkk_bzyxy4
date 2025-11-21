const PHOTOS = [
  'https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1615755146860-ef93a83a3121?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1612536052748-6f2f1f538bb9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542060748-10c28b62716a?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section id="gallery" className="min-w-[100vw] h-screen snap-start flex items-center bg-[#FAFAF7]">
      <div className="w-full px-0 md:px-8">
        <h2 className="px-8 md:px-16 text-3xl md:text-4xl font-bold text-slate-800 mb-6">Галерея работ</h2>
        <div className="overflow-x-auto flex gap-4 px-8 md:px-16 pb-4">
          {PHOTOS.map((src, i) => (
            <img key={i} src={src} alt={`До и после ${i+1}`} className="h-72 md:h-96 rounded-2xl object-cover shadow-md border border-emerald-900/10" />
          ))}
        </div>
      </div>
    </section>
  )
}
