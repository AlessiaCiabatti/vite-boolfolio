import './assets/scss/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router.js'

createApp(App).use(router).mount('#app')
