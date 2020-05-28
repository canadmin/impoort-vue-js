import Vue from "vue";
import {router} from "../../router";
import axios from "axios"
import {baseUrl} from "../../http/configurations";

const session = {
  user: {},
  userId: {}
};
const getters = {
  getUser(session) {
    return session.user;
  },
  getUserId() {
    return session.userId;
  }
};
const mutations = {
  updateProfileUser(session, response) {
    session.user = response.user;
    session.userId = response.userId;
  }
};
const actions = {
  showProfile({commit}, userId) {
    console.log("bakilan user ıd ", userId)
    let token = localStorage.getItem("token");
    let myId = localStorage.getItem("userId");
    return axios.get(baseUrl.base + "api/v1/user/profile/" + userId, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token.toString(),
        "Access-Control-Allow-Origin": "*"
      },
      params: {
        'userId': userId,
        'myId': myId
      }
    }).then(response => {
      localStorage.removeItem("visUser");
      localStorage.removeItem("visUserId");
      localStorage.setItem("visUser", JSON.stringify(response.data));
      localStorage.setItem("visUserId", response.data.userId);
      console.log(response.data)
      commit('updateProfileUser', response.data);
    })
  }
};

export default {
  session,
  getters,
  mutations,
  actions
}
