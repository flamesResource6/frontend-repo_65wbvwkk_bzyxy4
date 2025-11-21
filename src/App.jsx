import Navbar from './components/Navbar'
import HorizontalSections from './components/HorizontalSections'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Team from './components/sections/Team'
import Gallery from './components/sections/Gallery'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="font-sans text-slate-800">
      <Navbar />
      <HorizontalSections>
        <Hero />
        <About />
        <Services />
        <Team />
        <Gallery />
        <Testimonials />
        <Contact />
      </HorizontalSections>
    </div>
  )
}

export default App
