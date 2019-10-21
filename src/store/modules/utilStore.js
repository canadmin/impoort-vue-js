const state = {
    headerProfilePhoto : null
};
const getters = {
    getHeaderProfileStatus(state){
      return state.headerProfilePhoto;
    }
};

const mutations = {
    changePPImage(state,status){
      state.headerProfilePhoto=status;
    }
};

const actions = {
  activePPImage({commit},status){
    commit("changePPImage",status);
  }
};

export  default {
  state,
  getters,
  mutations,
  actions
}
