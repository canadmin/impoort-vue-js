import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import {store} from "./store/store";
import VueResource from "vue-resource";
import {router} from "./router";

Vue.use(VueResource);
Vue.use(BootstrapVue);


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
