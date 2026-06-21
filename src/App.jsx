import { useEffect } from 'react'
import { motion, useScroll, useSpring, useMotionValue } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import Footer from './components/Footer'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 40 })
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 origin-left"
      style={{ scaleX, height: 1, background: 'rgba(255,255,255,0.4)' }}
    />
  )
}

function CursorGlow() {
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const springX = useSpring(x, { stiffness: 80, damping: 22 })
  const springY = useSpring(y, { stiffness: 80, damping: 22 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 300)
      y.set(e.clientY - 300)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed z-20"
      style={{
        x: springX,
        y: springY,
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(120,150,255,0.055) 0%, transparent 70%)',
      }}
    />
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
