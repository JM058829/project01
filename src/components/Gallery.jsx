import { useState } from 'react'

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
          </button>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-5" onClick={() => setActive(null)}>
          <img src={active} alt="Expanded gallery" className="max-h-[90vh] rounded-2xl border border-zinc-700" />
        </div>
      )}
    </section>
  )
}
