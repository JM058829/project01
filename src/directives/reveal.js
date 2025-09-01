// v-reveal: IntersectionObserver-powered scroll animation
// Usage: v-reveal or v-reveal="'zoom-in' | 'fade-up' | 'fade-in'"
export default {
  mounted(el, binding) {
    const anim = typeof binding.value === 'string' ? binding.value : 'fade-up'
    el.classList.add('reveal')
    el.setAttribute('data-anim', anim)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    el.__revealObserver = observer
  },
  unmounted(el) {
    if (el.__revealObserver) el.__revealObserver.disconnect()
  }
}