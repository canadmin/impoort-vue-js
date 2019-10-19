import Vue from "vue";
import Vuex from "vuex";

import messageBox from "./modules/messageBox";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    messageBox,
  }
});
