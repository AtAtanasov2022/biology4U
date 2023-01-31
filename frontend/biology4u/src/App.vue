<template>
  <nav class="navBar">
    <div class="menuAndLogo">
      <router-link class="routerLink" id="router1" to="/">Biology4U</router-link>
      <va-button v-if="!user.username" icon="menu" left-icon @click="toggleSidebar()">
      </va-button>
    </div>
    <div class="paragraph">
      <p id="paragraph1">Теми и тестове по биология</p>
    </div>
    <div v-if="!user.username" class="navButtons">
      <router-link class="routerLink" id="router2" to="/logIn">Вход</router-link>
      <router-link class="routerLink" id="router3" to="/signUp">Регистрация</router-link>
    </div>
    <div v-else>
      <va-avatar class="mr-4" color="primary" col font-size="2rem">
        {{ user.username[0].toUpperCase() }}
      </va-avatar>
      <router-link to="/" @click="logout"><va-icon class="material-icons" color="#d8f3dc">logout</va-icon></router-link>
    </div>
  </nav>
  <div v-if="!isFullview" class="mainPage">
    <topic-sidebar v-if="isSidebarShow"></topic-sidebar>
    <router-view />
  </div>
  <router-view v-if="isFullview" />
</template>

<script>
import TopicSidebar from "./components/topic-sidebar/TopicSideBarComponent.vue";
import { mapGetters } from "vuex";
import store from "./store";

export default {
  components: {
    TopicSidebar
  },
  data() {
    return {
      isFullview: true,
      isSidebarShow: true
    };
  },



  beforeCreate() { this.$store.commit('initialiseStore'); },

  created() {
    this.$watch(
      () => this.$route.meta,
      () => {
        this.isFullview = this.$route.meta && !!this.$route.meta.isFullview;
      },
      { immediate: true }
    )
  },

  watch: {
    $route(to, from) {
      console.log(from);

      if (to.fullPath == "/logIn" || to.fullPath == "/signUp" || to.fullPath == "/") {
        this.isSidebarShow = false;
      } else {
        this.isSidebarShow = to.fullPath.includes("/main");
      }
    }
  },

  computed: {
    ...mapGetters({
      user: "getUserInfo",
    }),
  },

  methods: {
    logout() {
      store.dispatch("logout")
    },

    toggleSidebar() {
      this.isSidebarShow = !this.isSidebarShow;
    }
  }
};
</script>

<style>
@font-face {
  font-family: "Roboto";
  src: local("Roboto"), url(./fonts/Roboto-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "RobotoRegular";
  src: local("Roboto"), url(./fonts/Roboto-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "RobotoMedium";
  src: local("Roboto"), url(./fonts/Roboto-Medium.ttf) format("truetype");
}

body {
  margin: 0rem;
  padding: 0rem;
}

button.va-button.va-button--normal.va-button--icon-only {
  background-color: #40916c !important;
}

button.va-button.va-button--normal.va-button--icon-only {
  max-width: 3rem !important;
}

.material-icons {
  --va-icon-height: 90rem;
}

.routerLink {
  text-decoration: none;
}

.navBar {
  height: 5.313rem;
  background-color: #2d6a4f;
  display: flex;
  align-items: center;
  padding: 0rem 0.625rem;
  justify-content: space-between;
}

.navButtons {
  display: flex;
  align-items: center;
  width: 16rem;
  justify-content: space-between;
}

.menuAndLogo {
  margin-left: 1rem;
  width: 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.paragraph {
  margin-right: 1.0rem;
}

.va-button-dropdown {
  display: inline-block;
  font-family: var(--va-font-family);
  vertical-align: middle;
  max-width: 3rem !important;
}

.va-dropdown__content {
  background-color: whitesmoke !important;
}

.dropdownAccordionMenu {
  width: 20rem;
}

.topicCollapse {
  margin-top: 0.263rem;
}

.secondDropdownAccordion {
  width: 100%;
  margin: 0.163rem 0rem 0rem 0.425rem;
}

.subTopicCollapse {
  width: 97%;
  height: 3rem;
  margin: 0.15rem 0rem 0rem 0.15rem;
  padding: 1rem 1.25rem 0rem 1.25rem;
  background-color: white;
  border-radius: 0.35rem;
  cursor: pointer;
}

i.va-icon.material-icons.va-button__left-icon {
  color: rgb(255, 255, 255);
  font-size: 35px !important;
  height: 24px;
  line-height: 24px;
}

button.va-button.va-button--normal.va-button--icon-only {
  border-color: transparent;
  color: rgb(255, 255, 255);
  max-height: 2.7rem;
  background: transparent;
  --ac227dcc: #40916c;
  --55b53d91: 1;
  --29868a0e: transparent;
  --5deb53f6: 0;
}

i.va-icon.material-icons {
  font-size: 2.188rem !important;
  height: 2.188rem !important;
  line-height: 2.188rem !important;
  cursor: pointer !important;
  border: none !important;
}

#router1 {
  font-family: "Roboto";
  font-size: 2.5rem;
  color: #d8f3dc;
}

#router2,
#router3 {
  font-family: "RobotoRegular";
  font-size: 1.563rem;
  color: #ffffff;
}

#router3 {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #40916c;
  border-radius: 1.563rem;
  width: 10.625rem;
  height: 2.625rem;
}

#paragraph1 {
  font-family: "RobotoMedium";
  font-size: 1.5rem;
  color: #d8f3dc;
}

#menuButton {
  width: 3.125;
  height: 3.125;
  border-radius: 0.313rem;
  color: #d8f3dc;
  background-color: #40916c;
  border: none;
}
</style>
