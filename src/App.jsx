import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Videos from './components/Videos'
import Streaming from './components/Streaming'
import Releases from './components/Releases'
import Gallery from './components/Gallery'
import Merch from './components/Merch'
import Footer from './components/Footer'

const sections = ['videos', 'stream', 'music', 'gallery', 'merch']

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 900)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
        })
      },
      { threshold: 0.16 },
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [loaded])

  if (!loaded) {
    return (
      <div className="fixed inset-0 z-50 grid place-items-center bg-carbon text-amberglow">
        <div className="text-center">
          <p className="text-sm tracking-[0.35em] text-zinc-400">EL DE LA SANTA</p>
          <p className="mt-3 text-3xl font-black uppercase">Loading the Corrido Experience</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-carbon text-zinc-100">
      <Navbar sections={sections} />
      <Hero />
      <main className="space-y-24 pb-20">
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
