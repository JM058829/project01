const tracks = [
  { title: 'Noche Sin Perdón', year: '2026' },
  { title: 'Código de Honor', year: '2025' },
  { title: 'Sangre del Barrio', year: '2024' },
]

export default function Releases() {
  return (
    <section id="music" className="section-shell reveal">
      <h2 className="text-3xl font-black uppercase">Original Music</h2>
      <div className="mt-7 grid gap-5 md:grid-cols-3">
        {tracks.map((song) => (
          <article key={song.title} className="rounded-2xl border border-zinc-700 bg-zinc-900 p-4">
            <div className="h-48 rounded-xl bg-gradient-to-br from-crimson/35 to-amberglow/20" />
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-zinc-400">Release · {song.year}</p>
            <h3 className="mt-2 text-xl font-bold">{song.title}</h3>
            <button className="mt-4 rounded-full border border-zinc-500 px-4 py-2 text-xs font-bold uppercase">Listen</button>
          </article>
        ))}
      </div>
    </section>
  )
}
