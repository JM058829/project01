import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Videos from './components/Videos'
import Streaming from './components/Streaming'
import Releases from './components/Releases'
import Gallery from './components/Gallery'
import Merch from './components/Merch'
import Footer from './components/Footer'
import BackgroundFX from './components/BackgroundFX'

const revealTargets = '.reveal'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!loaded) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    document.querySelectorAll(revealTargets).forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [loaded])

  if (!loaded) {
    return (
      <div className="fixed inset-0 z-[80] overflow-hidden bg-carbon text-zinc-200">
        <div className="absolute inset-0 cinematic-noise opacity-60" />
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/20 blur-3xl" />
        <div className="grid min-h-screen place-items-center">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-zinc-500">Loading Artist World</p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.22em] text-amberglow">El De La Santa</h1>
            <div className="mx-auto mt-6 h-[2px] w-36 overflow-hidden rounded-full bg-zinc-800">
              <span className="loader-bar block h-full w-full origin-left bg-gradient-to-r from-crimson via-amberglow to-neon" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-x-clip bg-carbon text-zinc-100">
      <BackgroundFX />
      <Navbar />
      <Hero />
      <main className="relative z-10 space-y-32 pb-24 pt-8 md:space-y-36 md:pt-12">
        <Videos />
        <Streaming />
        <Releases />
        <Gallery />
        <Merch />
      </main>
      <Footer />
    </div>
  )
}
