<template>
  <nav class="navBar">
    <div class="menuAndLogo">
      <router-link class="routerLink" id="router1" to="/"
        >Biology4U</router-link
      >
      <button id="menuButton">
        <va-icon class="material-icons-outlined">menu</va-icon>
      </button>
    </div>
    <div>
      <p id="paragraph1">Теми и тестове по биология</p>
    </div>
    <div class="navButtons">
      <router-link class="routerLink" id="router2" to="/logIn"
        >Вход</router-link
      >
      <router-link class="routerLink" id="router3" to="/signIn"
        >Регистрация</router-link
      >
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {};
  },
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
  width: 14rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
</style>
