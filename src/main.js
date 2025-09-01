import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import reveal from './directives/reveal.js'

const app = createApp(App)
app.directive('reveal', reveal)
app.mount('#app')