import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import {store} from "./store/store";
import {router} from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyCsVua1W4Evzk6n_A01oKjfrr5UEhHwh_0",
  authDomain: "impoort-7d0ef.firebaseapp.com",
  databaseURL: "https://impoort-7d0ef.firebaseio.com",
  projectId: "impoort-7d0ef",
  storageBucket: "impoort-7d0ef.appspot.com",
  messagingSenderId: "565817915408",
  appId: "1:565817915408:web:051db81b4274a6a21bb295",
  measurementId: "G-0ELVRRJLSS"
})
Vue.use(BootstrapVue);
Vue.use(ElementUI);


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
