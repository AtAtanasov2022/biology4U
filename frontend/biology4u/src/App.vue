<template>
  <nav class="navBar">
    <div class="menuAndLogo">
      <router-link class="routerLink" id="router1" to="/">Biology4U</router-link>
      <va-button-dropdown v-if="!user.username" :close-on-content-click="false" icon="menu" left-icon>
        <va-accordion class="dropdownAccordionMenu" v-model="opened">
          <va-collapse v-for="(group, idx) in menuItems" :key="idx" :header="group.title" text-color="textPrimary"
            class="topicCollapse" color="textInverted" flat>
            <va-accordion class="secondDropdownAccordion">
              <div class="subTopicCollapse" v-for="(subTopic, id) in group.items" :key="id" @click="openSubTopic(subTopic.id)">
                <p>{{ subTopic.subTopicName }}</p>
              </div>
            </va-accordion>
          </va-collapse>
        </va-accordion>
      </va-button-dropdown>
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
      <!-- <va-icon @click="logout" class="material-icons" color="#d8f3dc">logout</va-icon> -->
    </div>
  </nav>
  <router-view />
</template>

<script>
import { mapGetters } from "vuex";
import router from "./router";
import store from "./store";
import TopicService from "./services/topic.service";

export default {
  data() {
    return { 
      opened: [false, false, false],
      menuItems: [],
      items: [
        {
          title: 'UI Elements',
          items: [
            { label: 'Button', id: 1 },
            { label: 'Data Table', id: 2 },
            { label: 'Radio', id: 3 },
          ],
        },
        {
          title: 'Services',
          items: [
            { label: 'Global Config', to: '/services/global-config', id: 4 },
            { label: 'Breakpoint Service', to: '/services/breakpoints', id: 5 },
          ],
        },
        {
          title: 'Styles',
          items: [
            { label: 'Colors', to: '/styles/colors', id: 6 },
            { label: 'Typography', to: '/styles/typography', id: 7 },
          ],
        },
      ],
    };
  },

  beforeCreate() { this.$store.commit('initialiseStore'); },

  beforeMount() {
    TopicService.getAllTopicsAndShortSubTopics().then(response => {
        console.log(response);
        this.menuItems = response;
    })
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

    openSubTopic(id) {
      router.push(`/main/topic/${id}`);
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
  /* background-color: #40916c; */
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
