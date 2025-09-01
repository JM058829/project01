<template>
  <div class="about">
    <div class="panel" v-reveal>
      <h2>About Riveras Construction</h2>
      <p style="color:var(--muted)">
        We’re a family-run, licensed, and insured contractor serving Southern California. Our team
        blends old-school craftsmanship with modern project management—so your job is done right,
        looks great, and stays on schedule.
      </p>
      <ul style="margin:10px 0 0 18px; color:var(--muted)">
        <li>License & Insurance documentation available upon request</li>
        <li>Clear estimates and transparent change-order process</li>
        <li>Professional crew with clean job sites</li>
      </ul>
    </div>
    <div class="panel" v-reveal="'zoom-in'">
      <h3>Core Values</h3>
      <p style="color:var(--muted)">Safety • Quality • Communication • Accountability</p>
      <div class="hero-cta">
        <a href="#projects" class="btn">See Work</a>
        <a href="#contact" class="btn primary">Get Quote</a>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>