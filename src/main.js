import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import {routes} from "./routes";
import {store} from "./store/store";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
