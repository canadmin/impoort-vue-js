const state = {
  messagesBox: []
};
const getters = {
  getMessageBox(state) {
    return state.messagesBox;
  }
};
const mutations = {
  openNewMessageBox(state, messageBox) {
    let isContains = false;
    for(let i = 0; i<state.messagesBox.length;i++){
      if(state.messagesBox[i].isim===messageBox.isim){
        isContains=true;
        console.log(state.messagesBox[i].isim)
      }
    }
    if(!isContains){
      state.messagesBox.push(messageBox);
    }
  },
  deleteBox(state,deleteBoxName){
      state.messagesBox.splice(state.messagesBox.indexOf({isim : deleteBoxName}),1);


  }
};

const actions = {
  addNewMessageBox({commit},message) {
    commit('openNewMessageBox',message);
  },
  deleteMessageBox({commit},deletedBoxName){
    console.log(deletedBoxName)
    commit('deleteBox',deletedBoxName);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
