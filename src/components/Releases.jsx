const featured = {
  title: 'Noche Sin Perdón',
  year: '2026',
  note: 'Latest single · dark brass · midnight tempo',
}

const catalog = [
  { title: 'Código de Honor', year: '2025', note: 'Street anthem' },
  { title: 'Sangre del Barrio', year: '2024', note: 'Fan favorite' },
  { title: 'Historias Reales', year: '2024', note: 'Deluxe version' },
]

export default function Releases() {
  return (
    <section id="music" className="section-shell reveal">
      <p className="section-kicker">Original Music</p>
      <h2 className="section-title">Catalog & Latest Release</h2>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <article className="group relative overflow-hidden rounded-3xl border border-zinc-700/90 bg-zinc-950/70 p-6">
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-crimson/20 blur-3xl" />
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Featured Release</p>
          <h3 className="mt-3 text-4xl font-black uppercase leading-tight">{featured.title}</h3>
          <p className="mt-1 text-sm uppercase tracking-[0.22em] text-amberglow">{featured.year}</p>
          <p className="mt-4 max-w-lg text-sm text-zinc-300">{featured.note}</p>
          <button className="mt-8 rounded-full bg-crimson px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white">
            Listen Release
          </button>
        </article>

        <div className="space-y-4">
          {catalog.map((release, idx) => (
            <article
              key={release.title}
              className="group flex items-center gap-4 rounded-2xl border border-zinc-700 bg-zinc-900/60 p-4 transition hover:border-zinc-500"
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900" />
              <div className="flex-1">
                <h4 className="text-lg font-bold">{release.title}</h4>
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">{release.year} · {release.note}</p>
              </div>
              <button className="rounded-full border border-zinc-600 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-zinc-200">
                Play
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
