import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题

Vue.use(ElementUI, {size: 'small'});


Vue.prototype.$http = Axios.create({
    headers: {
      "If-Modified-Since": "0",
      "Cache-Control":"no-cache"
    }
});
//Vue.prototype.$http = Axios;

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