import { useEffect, useState } from 'react'

const navItems = [
  ['videos', 'Videos'],
  ['stream', 'Streaming'],
  ['music', 'Releases'],
  ['gallery', 'Gallery'],
  ['merch', 'Merch'],
]

export default function Navbar({ sections }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('top')

  useEffect(() => {
    const ids = ['top', ...(sections || navItems.map(([id]) => id))]
    const sectionEls = ids.map((id) => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0.01 },
    )

    sectionEls.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [sections])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/70 bg-carbon/75 backdrop-blur-xl">
      <nav className="mx-auto flex w-[min(1200px,94%)] items-center justify-between py-3">
        <a href="#top" className="text-sm font-black uppercase tracking-[0.36em] text-zinc-100">
          El De La Santa
        </a>

        <button
          className="rounded-lg border border-zinc-700 px-3 py-2 text-xs uppercase tracking-[0.25em] text-zinc-200 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>

        <ul className="hidden items-center gap-2 md:flex">
          {navItems.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  active === id
                    ? 'border border-amberglow/70 bg-amberglow/10 text-amberglow'
                    : 'border border-transparent text-zinc-300 hover:border-zinc-700 hover:text-white'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="border-t border-zinc-800 bg-zinc-950/95 px-4 pb-4 pt-3 md:hidden">
          <ul className="space-y-2">
            {navItems.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                    active === id ? 'bg-amberglow/15 text-amberglow' : 'bg-zinc-900 text-zinc-300'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}