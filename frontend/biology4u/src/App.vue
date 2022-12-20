<template>
  <nav class="navBar">
    <div class="menuAndLogo">
      <router-link class="routerLink" id="router1" to="/">Biology4U</router-link>
      <va-button-dropdown :close-on-content-click="false" icon="menu" left-icon>
        <va-accordion class="dropdownAccordionMenu" v-model="opened">
          <va-collapse v-for="(group, idx) in items" :key="idx" :header="group.title" text-color="textPrimary"
            class="topicCollapse" color="textInverted" flat>
            <va-accordion class="secondDropdownAccordion">
              <div class="subTopicCollapse" v-for="(subTopic, id) in subTopics" :key="id">
                <p>{{ subTopic.title }}</p>
              </div>
            </va-accordion>
          </va-collapse>
        </va-accordion>
      </va-button-dropdown>
    </div>
    <div class="paragraph">
      <p id="paragraph1">Теми и тестове по биология</p>
    </div>
    <div class="navButtons">
      <router-link class="routerLink" id="router2" to="/logIn">Вход</router-link>
      <router-link class="routerLink" id="router3" to="/signIn">Регистрация</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      userLoggedIn: false,
      opened: [false, false, false],
      items: [
        {
          title: 'UI Elements',
          items: [
            { label: 'Button', to: '/ui-elements/button' },
            { label: 'Data Table', to: '/ui-elements/table' },
            { label: 'Radio', to: '/ui-elements/radio' },
          ],
        },
        {
          title: 'Services',
          items: [
            { label: 'Global Config', to: '/services/global-config' },
            { label: 'Breakpoint Service', to: '/services/breakpoints' },
          ],
        },
        {
          title: 'Styles',
          items: [
            { label: 'Colors', to: '/styles/colors' },
            { label: 'Typography', to: '/styles/typography' },
          ],
        },
      ],
      subTopics: [
        {
          title: 'SubTopic1',
        },
        {
          title: 'SubTopic2',
        },
        {
          title: 'SubTopic3',
        },
      ],
    };
  },
  methods: {
    something(index) {
      alert(`Hi from ${index}`);
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
