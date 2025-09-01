<template>
  <div class="contact">
    <div class="panel" v-reveal>
      <h2>Get a Free Quote</h2>
      <p style="color:var(--muted)">
        Tell us about your project and we'll follow up shortly. For fastest service, call us.
      </p>
      <form :action="mailtoHref" method="post">
        <div class="form-row">
          <div>
            <label for="name">Your Name</label>
            <input id="name" class="input" v-model="form.name" placeholder="Full name" required />
          </div>
          <div>
            <label for="email">Email</label>
            <input id="email" type="email" class="input" v-model="form.email" placeholder="you@email.com" required />
          </div>
        </div>
        <div class="form-row">
          <div>
            <label for="phone">Phone</label>
            <input id="phone" class="input" v-model="form.phone" placeholder="(000) 000-0000" />
          </div>
          <div>
            <label for="service">Service</label>
            <select id="service" class="select" v-model="form.service">
              <option>Roofing</option>
              <option>Tile</option>
              <option>Drywall</option>
              <option>Framing</option>
              <option>Commercial</option>
              <option>Residential</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div>
          <label for="message">Project Details</label>
          <textarea id="message" class="textarea" v-model="form.message" placeholder="Describe your project..." required></textarea>
        </div>
        <button class="btn primary" type="submit">Send Request</button>
      </form>
      <p style="margin-top:10px; color:var(--muted); font-size: 14px;">
        Submits using your email app. To enable a backend later (Netlify Forms / EmailJS / API), see README.
      </p>
    </div>

    <div class="panel" v-reveal="'fade-in'">
      <h3>Contact</h3>
      <p style="margin: 6px 0 0; color:var(--muted)">
        <strong>Phone:</strong> (555) 123-4567<br />
        <strong>Email:</strong> <a :href="`mailto:${toEmail}`">{{ toEmail }}</a><br />
        <strong>Hours:</strong> Mon–Sat 7am–6pm
      </p>
      <div style="height:12px"></div>
      <h3>Service Area</h3>
      <p style="margin: 6px 0 0; color:var(--muted)">
        Riverside • Moreno Valley • Perris • San Jacinto • Hemet • Temecula
      </p>
      <div style="height:12px"></div>
      <h3>Licensed & Insured</h3>
      <p style="margin: 6px 0 0; color:var(--muted)">
        CSLB #0000000 — add your license number here.
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
const toEmail = 'riverasconstruction@example.com'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: 'Roofing',
  message: ''
})

const mailtoHref = computed(() => {
  const subject = encodeURIComponent(`[Quote Request] ${form.service} — ${form.name}`)
  const body = encodeURIComponent(
`Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Service: ${form.service}

Project Details:
${form.message}`.trim()
  )
  return `mailto:${toEmail}?subject=${subject}&body=${body}`
})
</script>