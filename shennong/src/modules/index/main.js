import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios';
import './../../assets/styles/border.css'
import './../../assets/styles/public.css'
import './../../assets/styles/reset.css'

import Fastclick from "fastclick";
Fastclick.attach(document.body);

import loadingDialog from './../../plugin/loadingDialog';
Vue.prototype.loadingDialog = loadingDialog;

let baseUrl = '';
if(process.env.NODE_ENV === 'development'){
    baseUrl = ''
    Vue.prototype.$baseUrl = ''
}else{
    baseUrl = '/index.php'
    Vue.prototype.$baseUrl = 'http://diy.lssnst.com/index.php'
}

//'http://diy.lssnst.com/index.php/mobile/index/index?pageId=1'
Vue.prototype.$http = Axios.create({
    baseURL:baseUrl
});
//Vue.prototype.$http = Axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  data(){
    return{
    }
  }
}).$mount('#home')