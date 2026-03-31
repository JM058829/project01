const ctaButtons = [
  { label: 'Listen Now', href: '#stream', type: 'primary' },
  { label: 'Watch Videos', href: '#videos', type: 'ghost' },
  { label: 'Shop Capsule', href: '#merch', type: 'gold' },
]

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-end pt-20">
      <div className="absolute inset-0 -z-20 bg-hero-gradient" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_24%_30%,rgba(220,38,38,.30),transparent_45%),radial-gradient(circle_at_72%_25%,rgba(56,189,248,.22),transparent_36%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-carbon to-transparent" />

      <div className="mx-auto grid w-[min(1200px,92%)] gap-10 pb-16 md:grid-cols-[1.3fr_1fr] md:pb-20">
        <div className="reveal space-y-7">
          <p className="inline-flex rounded-full border border-zinc-600/70 bg-zinc-900/60 px-4 py-2 text-xs uppercase tracking-[0.28em] text-zinc-300">
            Original Corridos · Regional Mexican
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.95] text-zinc-100 sm:text-6xl lg:text-8xl">
            EL DE
            <span className="block bg-gradient-to-r from-zinc-200 via-amberglow to-zinc-100 bg-clip-text text-transparent">
              LA SANTA
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-2xl">
            Original Corridos. Real Stories. No Filter. A cinematic sound forged in street truth, northern
            grit, and luxury noir energy.
          </p>

          <div className="flex flex-wrap gap-3">
            {ctaButtons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                className={`group relative overflow-hidden rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] transition duration-300 ${
                  button.type === 'primary'
                    ? 'bg-crimson text-white shadow-glow'
                    : button.type === 'gold'
                      ? 'bg-amberglow text-carbon'
                      : 'border border-zinc-500 bg-zinc-900/70 text-zinc-100'
                }`}
              >
                <span className="relative z-10">{button.label}</span>
                <span className="absolute inset-0 translate-y-full bg-white/10 transition group-hover:translate-y-0" />
              </a>
            ))}
          </div>
        </div>

        <aside className="reveal rounded-3xl border border-zinc-700/70 bg-zinc-950/55 p-6 backdrop-blur-xl [transition-delay:120ms]">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Latest Release</p>
          <h2 className="mt-4 text-3xl font-black uppercase">Noche Sin Perdón</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">
            A dark brass anthem built for midnight drives, packed venues, and stories that hit harder live.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-4 text-center">
            <div className="rounded-2xl border border-zinc-700 bg-black/35 px-3 py-4">
              <p className="text-2xl font-black text-amberglow">2.4M</p>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Streams</p>
            </div>

            <div className="rounded-2xl border border-zinc-700 bg-black/35 px-3 py-4">
              <p className="text-2xl font-black text-neon">48K</p>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">New Fans</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}