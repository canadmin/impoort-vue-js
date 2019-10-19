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
    for (let i = 0; i < state.messagesBox.length; i++) {
      if (state.messagesBox[i].name === messageBox.name) {
        isContains = true;
        console.log(state.messagesBox[i].name)
      }
    }
    if (!isContains) {
      if (state.messagesBox.length < 3) {
        state.messagesBox.push(messageBox);
      } else {
        state.messagesBox.splice(0, 1);
        state.messagesBox.push(messageBox);
      }
    }
  },
  deleteBox(state, deleteBoxName) {
    state.messagesBox.splice(deleteBoxName, 1);


  }
};

const actions = {
  addNewMessageBox({commit}, message) {
    commit('openNewMessageBox', message);
  },
  deleteMessageBox({commit}, deletedBoxName) {
    console.log(deletedBoxName)
    commit('deleteBox', deletedBoxName);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
