import Vue from "vue";
import {router} from "../../router";
import axios from "axios"
import {baseUrl} from "../../http/configurations";

const session = {
  token : null,
  auth : null
};
const getters = {
  getSessionToken(session){
    return session.token;
  },
  getSessionUser(session){
    return session.auth;
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
    axios.post(baseUrl.base+"auth/signUp",payload)
      .then((response)=>{
        console.log(response)
      });
  },
  loginUser({commit},payload){
    axios.post(baseUrl.base+"auth/login",payload)
      .then((response)=>{
        console.log(response)
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("user",JSON.stringify(response.data.user));
        localStorage.setItem("userId",response.data.user.userId);

        commit('updateAuthInfo', response.data);
        router.push("/index");
      });
  }
};

export default {
  session,
  getters,
  mutations,
  actions
}
