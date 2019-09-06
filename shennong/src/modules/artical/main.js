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
            adSrcList: [
                { src: './nb_80.html', class: 'nb_80' },
                { src: '//static.sealk.cn/static/js/9295a614acad41b2cc574f9d091e5938.js', class: 'nb_81' },
                { src: '//static.sealk.cn/static/js/557cb9ac1ca2849eaaf7d4c7e51eecdc.js', class: 'nb_82' },
                { src: '//static.sealk.cn/static/js/c386e1c1883951b5ee5337abd69d6934.js', class: 'nb_83' },
                { src: '//static.sealk.cn/static/js/3ab3af66a5f593bc74cc1a4a3253064c.js', class: 'nb_84' },
                { src: '//static.sealk.cn/static/js/394c5fcd5c86680297700b0e96dd0268.js', class: 'nb_85' },
                { src: '//static.sealk.cn/static/js/08a487fdc151a7ad0c0f9d013ade2af9.js', class: 'nb_86' },
                { src: '//static.sealk.cn/static/js/3499bad1c579a5dbdeff3ac196332db8.js', class: 'nb_87' },
                { src: '//static.sealk.cn/static/js/e11cb04b5fe1575a6e765360b7bfe5ae.js', class: 'nb_88' },
                { src: '//static.sealk.cn/static/js/b3efeafdb82c71b161ba6da451361a88.js', class: 'nb_89' },
            ],
            cityObj: {},
            newsList: [],
            id: '',
            type: '',
            youmengsrc: 'https://s5.cnzz.com/z_stat.php?id=1277829026&web_id=1277829026',
            iframe4g: 'http://iframe.prculture.cn/iframe.js',
        }
    }
}).$mount('#artical')