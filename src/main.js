import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios';
import router from './router';
import App from './App.vue'
import env from './env'
// 跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(responese){
  let res = responese.data;
  if(res.status == 0) {
    return res.data;
  }else if(res.status == 10){
    window.Location.href = '/#/login'
  }else{
    alert(res.msg);
  }
});

Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
