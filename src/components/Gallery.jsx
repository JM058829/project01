import { useState } from 'react'

<<<<<<< HEAD
const images = [
  { src: 'https://picsum.photos/seed/santa-1/1000/1400', label: 'Backstage energy' },
  { src: 'https://picsum.photos/seed/santa-2/900/1100', label: 'Studio nights' },
  { src: 'https://picsum.photos/seed/santa-3/900/1400', label: 'Desert campaign' },
  { src: 'https://picsum.photos/seed/santa-4/1000/1100', label: 'Tour shadows' },
  { src: 'https://picsum.photos/seed/santa-5/1000/1300', label: 'Press portrait' },
  { src: 'https://picsum.photos/seed/santa-6/900/1200', label: 'Crowd moment' },
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  const active = activeIndex !== null ? images[activeIndex] : null

  const nextImage = (step) => {
    if (activeIndex === null) return
    const total = images.length
    setActiveIndex((activeIndex + step + total) % total)
  }

  return (
    <section id="gallery" className="section-shell reveal">
      <p className="section-kicker">Artist Gallery</p>
      <h2 className="section-title">Campaign Stills & Live Moments</h2>

      <div className="gallery-masonry mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((image, idx) => (
          <button
            key={image.src}
            onClick={() => setActiveIndex(idx)}
            className="group mb-4 w-full overflow-hidden rounded-2xl border border-zinc-700/70 bg-zinc-900 text-left"
          >
            <img src={image.src} alt={image.label} className="h-auto w-full object-cover transition duration-500 group-hover:scale-105" />
            <p className="px-4 py-3 text-xs uppercase tracking-[0.2em] text-zinc-300">{image.label}</p>
=======
const images = Array.from({ length: 8 }, (_, i) => ({
  src: `https://picsum.photos/seed/eldelasanta-${i + 1}/900/1200`,
  alt: `El De La Santa gallery ${i + 1}`,
}))

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="section-shell reveal">
      <h2 className="text-3xl font-black uppercase">Official Gallery</h2>
      <p className="mt-2 text-zinc-400">Tour scenes, studio nights, and behind-the-music moments.</p>
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {images.map((image) => (
          <button key={image.src} onClick={() => setActive(image.src)} className="overflow-hidden rounded-xl">
            <img src={image.src} alt={image.alt} className="glow-hover h-44 w-full object-cover" />
>>>>>>> origin/main
          </button>
        ))}
      </div>

      {active && (
<<<<<<< HEAD
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4" onClick={() => setActiveIndex(null)}>
          <button
            className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full border border-zinc-600 px-4 py-2 text-zinc-200"
            onClick={(event) => {
              event.stopPropagation()
              nextImage(-1)
            }}
          >
            ←
          </button>
          <img
            src={active.src}
            alt={active.label}
            className="max-h-[86vh] max-w-[min(1100px,92vw)] rounded-2xl border border-zinc-700"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full border border-zinc-600 px-4 py-2 text-zinc-200"
            onClick={(event) => {
              event.stopPropagation()
              nextImage(1)
            }}
          >
            →
          </button>
=======
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-5" onClick={() => setActive(null)}>
          <img src={active} alt="Expanded gallery" className="max-h-[90vh] rounded-2xl border border-zinc-700" />
>>>>>>> origin/main
        </div>
      )}
    </section>
  )
}
