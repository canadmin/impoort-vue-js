import Vue from "vue";
import Vuex from "vuex";
import {router} from "../router";
import messageBox from "./modules/messageBox";
import response from "vue-resource/src/http/response";

Vue.use(Vuex);

export const store = new Vuex.Store({
  session : {
    token : null,
    auth : []
  },
  getters : {
    getSessionToken(session){
      return this.session.token;
    },
    getSessionUser(session){
      return this.session.user;
    }
  },
  mutations :{
    updateAuthInfo(session,response){
      session.token =response.token;
      session.auth = response.user;
    }

  },
  actions : {
      registerUser({commit},payload){
        Vue.http.post("http://localhost:8081/auth/signUp",payload)
          .then((response)=>{
            console.log(response.data);
          });
      },
      loginUser({commit},payload){
        Vue.http.post("http://localhost:8081/auth/login",payload)
          .then((response)=>{
            console.log(response.data);
            commit('updateAuthInfo', response.data);
            console.log(response.data.token.includes("Bearer "));
            if(response.data.token.includes("Bearer ")){
            router.replace("/index");
            }
          });
      }
  },


  modules: {
    messageBox,
  }
});
