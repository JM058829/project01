const platforms = ['Spotify', 'Apple Music', 'iTunes', 'YouTube']

export default function Streaming() {
  return (
    <section id="stream" className="section-shell reveal">
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
        ))}
      </div>
    </section>
  )
}
