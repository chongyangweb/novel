import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './plugins/vant.js'
import '../public/style.css' // 公共类
import '../public/fonts/iconfont.css' // 公共类
// import './plugins/element.js' // element Ui 库
import {formatDate} from './plugins/function.js' // 辅助js 库
import {post,get,put,deletes,toJson,isEmpty} from './plugins/http.js' // axios

//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$put=put;
Vue.prototype.$delete=deletes;
Vue.prototype.$toJson=toJson;
Vue.prototype.$isEmpty=isEmpty;

Vue.filter('formatDate', function (time) {
    var date = new Date(time*1000);
    return formatDate(date, 'yyyy-MM-dd hh:mm');
});

Vue.filter('formatDataAuto', function ([time,str]) {
    var date = new Date(time*1000);
    return formatDate(date, str);
});

Vue.prototype.ROOT_URL = 'http://hgadmins.com/api/';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
