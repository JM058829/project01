const merch = [
  { title: 'No Filter Hoodie', price: '$78', tone: 'from-zinc-700 to-zinc-950' },
  { title: 'Midnight Corridos Tee', price: '$42', tone: 'from-zinc-800 to-zinc-900' },
  { title: 'Santa Crest Jacket', price: '$120', tone: 'from-zinc-700 to-black' },
]

export default function Merch() {
  return (
    <section id="merch" className="section-shell reveal">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-kicker">Capsule Collection</p>
          <h2 className="section-title">Official Merch Drop</h2>
        </div>
        <p className="max-w-sm text-sm text-zinc-400">Limited-run pieces inspired by tour visuals and signature lyrics.</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {merch.map((item, idx) => (
          <article
            key={item.title}
            className="group rounded-3xl border border-zinc-700/80 bg-zinc-950/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-amberglow/60"
            style={{ transitionDelay: `${idx * 70}ms` }}
          >
            <div className={`h-56 rounded-2xl bg-gradient-to-br ${item.tone}`} />
            <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-lg font-black text-amberglow">{item.price}</p>
              <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">Limited</span>
            </div>
            <button className="mt-5 w-full rounded-full bg-gradient-to-r from-crimson to-orange-500 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:brightness-110">
              Add to Cart
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
