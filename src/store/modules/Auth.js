import Vue from "vue";
import {router} from "../../router";

const session = {
  token : null,
  auth : []
};
const getters = {
  getSessionToken(session){
    return session.token;
  },
  getStateUser(session){
    return this.session.auth;
  }
};
const mutations = {
  updateAuthInfo(session,response){
    session.token =response.token;
    session.auth = response.user;
  }
};

const actions = {
  registerUser({commit},payload){
    Vue.http.post("http://localhost:8081/auth/signUp",payload)
      .then((response)=>{
      });
  },
  loginUser({commit},payload){
    Vue.http.post("http://localhost:8081/auth/login",payload)
      .then((response)=>{
        console.log(response.data);
        commit('updateAuthInfo', response.data);
        router.replace("/index");
      });
  }
};

export default {
  session,
  getters,
  mutations,
  actions
}
