const videos = [
  {
    title: 'Sangre del Barrio',
    description: 'Monochrome street cinema, real neighborhood stories, zero filter.',
    duration: '3:42',
  },
  {
    title: 'Noche Sin Perdón',
    description: 'A desert-night visual with crimson lighting and live brass intensity.',
    duration: '4:08',
  },
  {
    title: 'Código de Honor',
    description: 'Luxury noir concept blending corrido roots with futuristic framing.',
    duration: '3:56',
  },
]

export default function Videos() {
  return (
    <section id="videos" className="section-shell reveal">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="section-kicker">Featured Visuals</p>
          <h2 className="section-title">Music Video Showcase</h2>
        </div>
        <a
          href="#"
          className="inline-flex rounded-full border border-zinc-700 px-5 py-2 text-xs uppercase tracking-[0.22em] text-zinc-300"
        >
          View All Videos
        </a>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {videos.map((video, idx) => (
          <article
            key={video.title}
            className="group relative overflow-hidden rounded-3xl border border-zinc-700/80 bg-zinc-950/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-crimson/60"
            style={{ transitionDelay: `${idx * 70}ms` }}
          >
            <div className="relative h-52 overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(220,38,38,.35),transparent_40%)]" />
              <div className="absolute bottom-3 right-3 rounded-full border border-zinc-500 bg-black/60 px-3 py-1 text-xs text-zinc-200">
                {video.duration}
              </div>
              <button className="absolute left-4 top-4 rounded-full border border-zinc-500 bg-black/65 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-100 transition group-hover:border-crimson group-hover:text-crimson">
                ▶ Watch
              </button>
            </div>
            <h3 className="mt-5 text-2xl font-bold text-zinc-100">{video.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{video.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}