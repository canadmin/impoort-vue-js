import Vue from "vue";
import Vuex from "vuex";
import {router} from "../router";
import messageBox from "./modules/messageBox";
import  auth from "./modules/Auth";
import utilStore from "./modules/utilStore";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    messageBox,
    auth,
    utilStore
  }
});
