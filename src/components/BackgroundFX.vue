<template>
  <div class="fx" aria-hidden="true">
    <div class="grid-bg"></div>
    <!-- Layered abstract shapes (white & green) -->
    <span class="shape layer-1" />
    <span class="shape layer-2" />
    <span class="shape layer-3" />
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

// Set :root[data-scene="index"] based on nearest section in view
onMounted(() => {
  const root = document.documentElement
  const scenes = Array.from(document.querySelectorAll('[data-scene]'))
  const onScroll = () => {
    let best = 0, bestDist = Infinity
    const wh = window.innerHeight
    const sy = window.scrollY
    scenes.forEach((el, i) => {
      const r = el.getBoundingClientRect()
      const center = r.top + sy + r.height / 2
      const dist = Math.abs(center - (sy + wh/2))
      if (dist < bestDist) { bestDist = dist; best = i }
    })
    root.setAttribute('data-scene', String(best))
  }
  const onScrollRaf = () => { requestAnimationFrame(onScroll) }
  window.addEventListener('scroll', onScrollRaf, { passive: true })
  window.addEventListener('resize', onScrollRaf)
  onScroll()
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScrollRaf)
    window.removeEventListener('resize', onScrollRaf)
  })
})
</script>

<style scoped>
.fx {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}

.shape {
  position: absolute;
  inset: 0;
  border-radius: 24px;
  transition: transform .8s cubic-bezier(.2,.8,.2,1), opacity .8s cubic-bezier(.2,.8,.2,1), filter .8s ease;
  will-change: transform, opacity, filter;
  mix-blend-mode: screen;
  opacity: .4;
}

.layer-1 {
  background:
    radial-gradient(420px 220px at 20% 30%, rgba(255,255,255,.28), transparent 60%),
    radial-gradient(520px 260px at 80% 30%, rgba(34,197,94,.25), transparent 60%);
  animation: float1 20s ease-in-out infinite alternate;
}
.layer-2 {
  background:
    radial-gradient(460px 220px at 25% 70%, rgba(34,197,94,.28), transparent 60%),
    radial-gradient(380px 180px at 70% 80%, rgba(255,255,255,.22), transparent 60%);
  animation: float2 24s ease-in-out infinite alternate;
}
.layer-3 {
  background:
    conic-gradient(from 0deg, rgba(34,197,94,.14), rgba(255,255,255,.16), transparent, transparent);
  filter: blur(16px);
  animation: spin 36s linear infinite;
  opacity: .2;
}

@keyframes float1 { to { transform: translate3d(2%, -2%, 0) scale(1.04) rotate(1deg); } }
@keyframes float2 { to { transform: translate3d(-2%, 2%, 0) scale(0.98) rotate(-1deg); } }
@keyframes spin { to { transform: rotate(360deg); } }
</style>