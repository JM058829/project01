export default function BackgroundFX() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 cinematic-noise opacity-30" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-vignette" />
      <div className="pointer-events-none fixed inset-0 z-0">
        <span className="floating-orb left-[8%] top-[16%] h-48 w-48 bg-crimson/20" />
        <span className="floating-orb left-[84%] top-[18%] h-40 w-40 bg-neon/20 [animation-delay:2s]" />
        <span className="floating-orb left-[68%] top-[58%] h-52 w-52 bg-amberglow/15 [animation-delay:1.2s]" />
      </div>
    </>
  )
}
