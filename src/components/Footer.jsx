<<<<<<< HEAD
const socials = [
  ['Instagram', 'IG'],
  ['YouTube', 'YT'],
  ['TikTok', 'TT'],
  ['Spotify', 'SP'],
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-800/70 pb-10 pt-14">
      <div className="mx-auto flex w-[min(1200px,92%)] flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.45em] text-zinc-400">El De La Santa</p>
            <p className="mt-2 text-xl font-black uppercase">Regional Mexican · Urban Noir</p>
          </div>
          <div className="flex gap-3">
            {socials.map(([name, short]) => (
              <a
                key={name}
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-xs font-bold tracking-widest text-zinc-200 transition hover:border-amberglow hover:text-amberglow"
                aria-label={name}
                title={name}
              >
                {short}
              </a>
            ))}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">© 2026 El De La Santa. All rights reserved.</p>
=======
const social = ['Instagram', 'YouTube', 'TikTok', 'Spotify']

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10">
      <div className="mx-auto flex w-[min(1120px,92%)] flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-lg font-black tracking-[0.15em] text-zinc-100">EL DE LA SANTA</p>
        <div className="flex gap-4 text-sm text-zinc-300">
          {social.map((item) => (
            <a href="#" key={item} className="transition hover:text-amberglow">
              {item}
            </a>
          ))}
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">© 2026 All rights reserved.</p>
>>>>>>> origin/main
      </div>
    </footer>
  )
}
