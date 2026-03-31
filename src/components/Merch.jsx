const merch = [
  { title: 'Midnight Corridos Tee', price: '$40' },
  { title: 'No Filter Hoodie', price: '$75' },
  { title: 'Santa Crest Longsleeve', price: '$55' },
]

export default function Merch() {
  return (
    <section id="merch" className="section-shell reveal">
      <h2 className="text-3xl font-black uppercase">Official Merch</h2>
      <div className="mt-7 grid gap-5 md:grid-cols-3">
        {merch.map((item) => (
          <article key={item.title} className="glow-hover rounded-2xl border border-zinc-700 bg-zinc-950 p-4">
            <div className="h-48 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900" />
            <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
            <p className="mt-1 text-amberglow">{item.price}</p>
            <button className="mt-4 w-full rounded-full bg-crimson py-2 text-sm font-bold uppercase">Add to Cart</button>
          </article>
        ))}
      </div>
    </section>
  )
}
