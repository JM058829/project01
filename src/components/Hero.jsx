const cta = ['Listen Now', 'Watch Videos', 'Shop Merch']

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-hero-gradient pt-20">
      <div className="absolute inset-0 opacity-20 [background:linear-gradient(transparent_95%,rgba(245,158,11,.5)_96%)] [background-size:100%_24px]" />
      <div className="mx-auto w-[min(1120px,92%)] py-14">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.42em] text-neon">Regional Mexican</p>
        <h1 className="max-w-4xl text-5xl font-black uppercase leading-tight sm:text-6xl lg:text-7xl">
          El De La Santa
        </h1>
        <p className="mt-5 max-w-2xl text-xl font-medium text-zinc-300">
          Original Corridos. Real Stories. No Filter.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          {cta.map((item, i) => (
            <a
              key={item}
              href={i === 2 ? '#merch' : i === 1 ? '#videos' : '#stream'}
              className={`glow-hover rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wider ${
                i === 0
                  ? 'bg-crimson text-white'
                  : i === 1
                    ? 'border border-zinc-600 bg-zinc-900 text-zinc-100'
                    : 'bg-amberglow text-black'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="mt-12 max-w-lg rounded-2xl border border-zinc-700 bg-black/35 p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Latest release</p>
          <p className="mt-2 text-2xl font-black">“Noche Sin Perdón”</p>
          <p className="mt-2 text-sm text-zinc-300">A high-impact corrido with dark brass and true street narratives.</p>
        </div>
      </div>
    </section>
  )
}
