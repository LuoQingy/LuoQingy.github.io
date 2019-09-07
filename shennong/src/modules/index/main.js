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

Vue.prototype.$http = Axios.create({
  headers: {
    "If-Modified-Since": "0",
    "Cache-Control":"no-cache"
  }
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