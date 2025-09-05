<template>
  <div class="layout">
    <header class="layout-header">
      <Navbar />
    </header>

    <BackgroundFX />

    <main class="layout-main">
      <Hero data-scene="0" />

      <section id="services" class="container section" data-scene="1">
        <header class="section-head" v-reveal>
          <h2>Full-Service Construction</h2>
          <p>Roofing • Tile • Drywall • Framing • Commercial & Residential</p>
        </header>
        <Services />
      </section>

      <Steps data-scene="2" />

      <section id="projects" class="container section alt" data-scene="3">
        <header class="section-head" v-reveal>
          <h2>Featured Projects</h2>
          <p>Quality craftsmanship, delivered on time and on budget.</p>
        </header>
        <Projects />
      </section>

      <section id="about" class="container section" data-scene="4">
        <About />
      </section>

      <CtaBar data-scene="5" />

      <section id="contact" class="container section alt" data-scene="6">
        <Contact />
      </section>
    </main>

    <footer class="layout-footer">
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import BackgroundFX from './components/BackgroundFX.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Steps from './components/Steps.vue'
import CtaBar from './components/CtaBar.vue'
</script>