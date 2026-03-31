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
      </div>
    </footer>
  )
}
