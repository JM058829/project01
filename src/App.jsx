import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Videos from './components/Videos'
import Streaming from './components/Streaming'
import Releases from './components/Releases'
import Gallery from './components/Gallery'
import Merch from './components/Merch'
import Footer from './components/Footer'
<<<<<<< HEAD
import BackgroundFX from './components/BackgroundFX'

const revealTargets = '.reveal'
=======

const sections = ['videos', 'stream', 'music', 'gallery', 'merch']
>>>>>>> origin/main

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
<<<<<<< HEAD
    const timer = setTimeout(() => setLoaded(true), 1100)
=======
    const timer = setTimeout(() => setLoaded(true), 900)
>>>>>>> origin/main
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
<<<<<<< HEAD
    if (!loaded) return

=======
>>>>>>> origin/main
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
        })
      },
<<<<<<< HEAD
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    document.querySelectorAll(revealTargets).forEach((el) => observer.observe(el))
=======
      { threshold: 0.16 },
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
>>>>>>> origin/main
    return () => observer.disconnect()
  }, [loaded])

  if (!loaded) {
    return (
<<<<<<< HEAD
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
=======
      <div className="fixed inset-0 z-50 grid place-items-center bg-carbon text-amberglow">
        <div className="text-center">
          <p className="text-sm tracking-[0.35em] text-zinc-400">EL DE LA SANTA</p>
          <p className="mt-3 text-3xl font-black uppercase">Loading the Corrido Experience</p>
>>>>>>> origin/main
        </div>
      </div>
    )
  }

  return (
<<<<<<< HEAD
    <div className="relative overflow-x-clip bg-carbon text-zinc-100">
      <BackgroundFX />
      <Navbar />
      <Hero />
      <main className="relative z-10 space-y-32 pb-24 pt-8 md:space-y-36 md:pt-12">
=======
    <div className="bg-carbon text-zinc-100">
      <Navbar sections={sections} />
      <Hero />
      <main className="space-y-24 pb-20">
>>>>>>> origin/main
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
