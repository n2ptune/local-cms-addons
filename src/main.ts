import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import './styles/index.scss'

const app = createApp(App)
installElementPlus(app)
app.mount('#app')
