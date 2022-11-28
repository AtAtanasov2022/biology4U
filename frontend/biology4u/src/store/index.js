import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    userInfo: {}
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    }
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    setUserData(context, userInfo) {
      axios.post("http://localhost:5001/api/v1/users/", userInfo).then(response => {
        console.log(response);
        context.commit('setUserInfo', response.data);

      }).catch(err => {
        console.log(err.message);
      })
    }
  },
  modules: {
  }
})
