<template>
  <section class="hero container" id="top">
    <div class="hero-grid">
      <div>
        <div class="badge" v-reveal="'fade-in'">
          <span aria-hidden="true">🏗️</span>
          <span>Commercial & Residential • Licensed & Insured</span>
        </div>
        <h1 class="h1" v-reveal>
          Premium Construction,<br/> Built Like Fintech.
        </h1>
        <p class="lead" v-reveal>
          Riveras Construction delivers sleek, reliable results—roofing, tile, drywall, framing and more.
          Clear timelines, detailed estimates, and clean sites. On time, on budget.
        </p>
        <div class="hero-cta">
          <a href="#contact" class="btn primary" v-reveal="'zoom-in'">Get a Free Quote</a>
          <a href="#projects" class="btn" v-reveal>See Projects</a>
        </div>
        <div style="height:24px"></div>
        <div class="marquee" aria-label="Trusted by local businesses" v-reveal="'fade-in'">
          <div class="logo">LOGO</div><div class="logo">LOGO</div><div class="logo">LOGO</div><div class="logo">LOGO</div><div class="logo">LOGO</div>
        </div>
      </div>

      <div class="device" v-reveal>
        <div class="screen" role="img" aria-label="Project dashboard preview"></div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          <div class="stat">
            <h3>48 hrs</h3>
            <p>Quote Turnaround</p>
          </div>
          <div class="stat">
            <h3>4.9★</h3>
            <p>Client Rating</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>