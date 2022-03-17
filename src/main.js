import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SvgIcon from '@/icons'
import '@/router/permission'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'

const app = createApp(App)
SvgIcon(app)
app.use(store).use(router).mount('#app')
