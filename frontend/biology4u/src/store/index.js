import { createStore } from 'vuex'
import jwt_decode from "jwt-decode"
import router from '@/router';
import AuthService from '@/services/auth.service';
import TopicService from '@/services/topic.service';
import SubTopicService from '@/services/subTopic.service';

export default createStore({
  state: {
    userInfo: {},
    menuItems: [],
    subTopicInfo: {}
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
    getMenuItems(state) {
      return state.menuItems;
    }, 
    getSubTopicInfo(state) {
      return state.subTopicInfo;
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
    
    setSubTopicInfo(state, subTopicInfo) {
      state.subTopicInfo = subTopicInfo;
    }
  },
  actions: {
    signUpUser(context, userInfo) {
      AuthService.register(userInfo).then(response => {
        context.commit('setUserInfo', jwt_decode(response.data.token));
        router.push('/main');
      }).catch(err => {
        console.log(err.message);
      })
    },

    logInUser(context, userInfo) {
      AuthService.login(userInfo).then(response => {
        context.commit('setUserInfo', jwt_decode(response.data.token));
        router.push('/main');
      }).catch(err => {
        console.log(err.message);
      })
    },

    logout(context) {
      AuthService.logout();
      context.commit('deleteUserInfo');
    },

    async getAllTopicsAndShortSubTopics(context) {
      TopicService.getAllTopicsAndShortSubTopics().then(response => {
        context.commit("setTopicsAndSubTopics", response);
      })
    },

    async getSubtopic(context, subTopicId) {
      SubTopicService.getSubtopicInfo(subTopicId).then(response => {
        context.commit("setSubTopicInfo", response);
      })
    }
    // refreshToken (context) {

    // }
  },
  modules: {
  }
})

