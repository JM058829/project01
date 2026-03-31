const videos = [
  { title: 'Sangre del Barrio', description: 'Raw live visuals and no-filter storytelling.' },
  { title: 'Noche Sin Perdón', description: 'A cinematic desert-night performance video.' },
  { title: 'Código de Honor', description: 'Urban-luxury concept shot in monochrome tones.' },
]

export default function Videos() {
  return (
    <section id="videos" className="section-shell reveal">
      <h2 className="text-3xl font-black uppercase">Featured Music Videos</h2>
      <p className="mt-2 text-zinc-400">Watch the latest official visuals from El De La Santa.</p>
      <div className="mt-7 grid gap-5 md:grid-cols-3">
        {videos.map((video) => (
          <article key={video.title} className="glow-hover rounded-2xl border border-zinc-700 bg-zinc-950 p-4">
            <div className="grid h-44 place-items-center rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900">
              <button className="rounded-full bg-crimson px-4 py-2 text-sm font-bold uppercase">▶ Watch</button>
            </div>
            <h3 className="mt-4 text-xl font-bold">{video.title}</h3>
            <p className="mt-1 text-sm text-zinc-400">{video.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
