import { useEffect, useRef, useState } from 'react'

// Utility to detect mobile breakpoint
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    handler()
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return isMobile
}

export default function HorizontalSections({ children }) {
  const containerRef = useRef(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile) return
    const el = containerRef.current
    if (!el) return

    const onWheel = (e) => {
      // Allow shift+wheel to behave naturally
      if (e.shiftKey) return
      // Horizontal scroll on vertical wheel
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        el.scrollTo({ left: el.scrollLeft + e.deltaY, behavior: 'smooth' })
      }
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [isMobile])

  return (
    <div
      ref={containerRef}
      className={`w-full h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth ${isMobile ? 'flex flex-col overflow-y-auto overflow-x-hidden' : 'flex'} bg-[#FAFAF7]`}
    >
      {children}
    </div>
  )
}
