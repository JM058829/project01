<<<<<<< HEAD
const platforms = [
  { name: 'Spotify', hint: 'Follow for drops + playlists', glyph: '◉' },
  { name: 'Apple Music', hint: 'Curated essentials + exclusives', glyph: '◌' },
  { name: 'iTunes', hint: 'Buy the catalog and latest singles', glyph: '◎' },
  { name: 'YouTube', hint: 'Official videos and live sessions', glyph: '◈' },
]
=======
const platforms = ['Spotify', 'Apple Music', 'iTunes', 'YouTube']
>>>>>>> origin/main

export default function Streaming() {
  return (
    <section id="stream" className="section-shell reveal">
<<<<<<< HEAD
      <p className="section-kicker">Streaming & Routing</p>
      <h2 className="section-title">Stream El De La Santa on all platforms</h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {platforms.map((platform, idx) => (
          <a
            key={platform.name}
            href="#"
            className="group rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-900/80 to-zinc-950/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-300 hover:-translate-y-1 hover:border-neon/55"
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            <span className="text-xl text-neon transition group-hover:text-amberglow">{platform.glyph}</span>
            <h3 className="mt-3 text-xl font-bold">{platform.name}</h3>
            <p className="mt-1 text-sm text-zinc-400">{platform.hint}</p>
            <p className="mt-5 text-xs uppercase tracking-[0.25em] text-zinc-500">Open Platform →</p>
          </a>
=======
      <h2 className="text-3xl font-black uppercase">Stream Everywhere</h2>
      <p className="mt-2 text-zinc-400">Stream El De La Santa on all platforms.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {platforms.map((platform) => (
          <button
            key={platform}
            className="glow-hover rounded-xl border border-zinc-700 bg-gradient-to-br from-zinc-900 to-zinc-950 p-5 text-left"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-400">Platform</p>
            <p className="mt-2 text-lg font-bold">{platform}</p>
          </button>
>>>>>>> origin/main
        ))}
      </div>
    </section>
  )
}
