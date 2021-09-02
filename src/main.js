import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import request from './utils/request'
import request from './utils/storage'


const app = createApp(App);
console.log("模式"+import.meta.env)

console.log("mockApi",config)
// axios.get(config.mockApi+'/login/').then((res)=>{
//     console.log(res)
// })

app.config.globalProperties.$request = request
app.use(router).use(ElementPlus).mount('#app')
