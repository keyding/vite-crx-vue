import { createApp } from 'vue'
import App from './App.vue'

const root = document.createElement('div')
root.id = 'crx-app'
document.body.append(root)

createApp(App).mount(root)
