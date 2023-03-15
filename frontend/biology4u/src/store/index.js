import { createStore } from 'vuex'
import jwt_decode from "jwt-decode"
import router from '@/router';
import AuthService from '@/services/auth.service';
import TopicService from '@/services/topic.service';
import TokenService from '@/services/token.service';

export default createStore({
  state: {
    userInfo: {},
    menuItems: [],
    sidebarState:{
      openedTopicId:-1,
      openedSubtopicId:-1
    }
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
    getMenuItems(state) {
      return state.menuItems;
    }, 
    sidebarState(state){
      return state.sidebarState;
    }
  },
  mutations: {
    initialiseStore(state) {
      const userInfo = localStorage.getItem('user');
      if (userInfo) {
        state.userInfo = JSON.parse(userInfo);
      }
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    deleteUserInfo(state) {
      state.userInfo = {};
    }, 

    setTopicsAndSubTopics(state, topicsAndSubTopicsInfo) {
      state.menuItems = topicsAndSubTopicsInfo;
    }, 
    
    openedTopic(state,sidebarState){
      state.sidebarState = sidebarState;
    }
  },
  actions: {
    signUpUser(context, userInfo) {
      AuthService.register(userInfo).then(response => {
        context.commit('setUserInfo', jwt_decode(response.data.token));
        router.push('/main');
      }).catch(err => {
        alert("Имейлът вече се използва!");
        console.log(err.message);
      })
    },

    logInUser(context, userInfo) {
      AuthService.login(userInfo).then(response => {
        context.commit('setUserInfo', jwt_decode(response.token));
        router.push('/main');
      }).catch(err => {
        alert("Грешно потребителско име или парола!");
        console.log(err.message);
      })
    },

    logout(context) {
      AuthService.logout();
      context.commit('deleteUserInfo');
    },

    getAllTopicsAndShortSubTopics(context) {
      TopicService.getAllTopicsAndShortSubTopics().then(response => {
        context.commit("setTopicsAndSubTopics", response);
      })
    },

    openTopic(context,sidebarState){
      context.commit("openedTopic", sidebarState);
    },

    refreshToken(context,newTokens){
      context.commit('setUserInfo', jwt_decode(newTokens.token))
      TokenService.setUser(newTokens);
    },
  },
  modules: {
  }
})

