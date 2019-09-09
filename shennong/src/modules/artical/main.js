import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import './../../assets/styles/border.css'

Vue.use(ElementUI, {size: 'small'});

let baseUrl = '';
if(process.env.NODE_ENV === 'development'){
    baseUrl = ''
    
}
//'http://diy.lssnst.com/index.php/mobile/index/index?pageId=1'
Vue.prototype.$http = Axios.create({
    baseURL:baseUrl
});
console.log(process.env)

Vue.config.productionTip = false
console.log(router)
new Vue({
    router,
    render: h => h(App),
    data(){
        return{
            
        }
    }
}).$mount('#artical')