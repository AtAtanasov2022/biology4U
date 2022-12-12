<template>
  <div class="landingPage">
    <va-carousel :items="items" stateful autoscroll :autoscrollInterval="2000">
    </va-carousel>
    <!-- //H1 tag with welcome message -->
    <div class="sloganAndBtn">
      <p class="slogan">Всички теми по биология на едно място</p>
      <button class="button" @click="toSignIn">Регистрирай се</button>
    </div>
    <!-- //Sign in Button  -->

    <!-- <input placeholder="Username" v-model="username" />
    <input placeholder="Password" v-model="password" />
    <input placeholder="Email" v-model="email" />
    <input placeholder="FirstName" v-model="firstName" />
    <input placeholder="LastName" v-model="lastName" />
    <input placeholder="UserType" v-model="userType" />

    <button @click="createUser">Create User</button> -->
  </div>
</template>

<script scoped>
import router from '@/router';
import store from '@/store';
import image1 from '../assets/image1Bio.jpg'
import image2 from '../assets/image2Bio.jpg'
import image3 from '../assets/image3Bio.jpg'
import image4 from '../assets/image4Bio.jpg'

export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      userType: "",
      items: [image1, image2, image3, image4],
    };
  },

  methods: {
    createUser() {
      const userInfo = {
        username: this.username,
        userPassword: this.password,
        email: this.email,
        firstname: this.firstName,
        lastname: this.lastName,
        userType: this.userType,
      };

      store.dispatch('setUserData', userInfo);
    },

    toSignIn() {
      router.push("/signIn");
    }
  },
};
</script>

<style>
@font-face {
  font-family: "Roboto";
  src: local("Roboto"), url(../fonts/Roboto-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "RobotoRegular";
  src: local("Roboto"), url(../fonts/Roboto-Regular.ttf) format("truetype");
}

div.va-carousel__indicators {
  display: none !important;
}

div.va-carousel__arrow--left,
div.va-carousel__arrow--right {
  display: none !important;
}

div.va-carousel {
  height: 35.5rem !important;
  border-radius: 0rem;
}

.landingPage {
  position: relative;
}

.sloganAndBtn {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0rem;
  margin: auto;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
}

.slogan {
  font-family: "Roboto";
  width: fit-content;
  margin: 0rem auto 3rem auto;

  font-size: 3rem;
}

.button {
  padding: 0.3rem;
  margin: 0rem auto 0rem auto;
  font-family: "RobotoRegular";
  font-size: 1.563rem;
  color: #ffffff;
  background-color: #40916c;
  border-radius: 1rem;
  width: fit-content;
  border: none;
  cursor: pointer;
}
</style>
