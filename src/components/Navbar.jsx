const navItems = [
  ['videos', 'Videos'],
  ['stream', 'Streaming'],
  ['music', 'Music'],
  ['gallery', 'Gallery'],
  ['merch', 'Merch'],
]

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-zinc-800/80 bg-carbon/75 backdrop-blur-md">
      <nav className="mx-auto flex w-[min(1120px,94%)] items-center justify-between py-3">
        <a href="#top" className="text-lg font-black tracking-[0.18em] text-amberglow">
          EL DE LA SANTA
        </a>
        <ul className="hidden gap-5 text-sm font-semibold text-zinc-300 md:flex">
          {navItems.map(([id, label]) => (
            <li key={id}>
              <a className="transition hover:text-white" href={`#${id}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
