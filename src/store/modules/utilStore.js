const state = {
    headerProfilePhoto : null,
    showHeaderBackground : true
};
const getters = {
    getHeaderProfileStatus(state){
      return state.headerProfilePhoto;
    },
    getHeaderBackground(state){
      return state.showHeaderBackground;
    }

};

const mutations = {
    changePPImage(state,status){
      state.headerProfilePhoto=status;
    },
    showHeader(state,status){
      state.showHeaderBackground=status;
    }
};

const actions = {
  activePPImage({commit},status){
    commit("changePPImage",status);
  },
  changeHeaderBackground({commit},status){
    commit("showHeader",status);
  }
};

export  default {
  state,
  getters,
  mutations,
  actions
}
