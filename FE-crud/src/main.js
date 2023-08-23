import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './static/fontawesome-free-6.4.2-web/fontawesome-free-6.4.2-web/css/all.min.css'
import {Table,Card,Menu,List, Drawer,Button, message } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { createPinia } from 'pinia';
import "swiper/css"


const app = createApp(App)
app.use(VueSweetalert2);
app.use(router)
app.use(VueAxios,{$request:axios})
app.use(Button)
app.use(Drawer)
app.use(List)
app.use(Menu)
app.use(Card)
app.use(Table)
app.use(createPinia())
app.mount('#app')
app.config.globalProperties.$message = message;

