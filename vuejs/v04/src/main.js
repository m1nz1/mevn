import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 구문추가

const app = createApp(App)
app.use(router).mount('#app')
app.config.globalProperties.$myname = '홍길동'
app.config.globalProperties.$myfn = () => alert('짜잔!')
