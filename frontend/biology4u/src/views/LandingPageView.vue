<template>
  <div class="landingPage">
    <!-- //Carousel -->
    <va-carousel :items="items" stateful autoscroll :autoscrollInterval="3000" style="height: 39rem; border-radius: 0rem ;">
    </va-carousel>
    <!-- //H1 tag with welcome message -->
    <!-- //Sign in Button  -->

    <input placeholder="Username" v-model="username" />
    <input placeholder="Password" v-model="password" />
    <input placeholder="Email" v-model="email" />
    <input placeholder="FirstName" v-model="firstName" />
    <input placeholder="LastName" v-model="lastName" />
    <input placeholder="UserType" v-model="userType" />

    <button @click="createUser">Create User</button>
  </div>
</template>

<script>
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
  },
};
</script>

<style>

div.va-carousel__indicators {
  display: none !important;
}
div.va-carousel__arrow--left,
div.va-carousel__arrow--right {
  display: none !important;
}
</style>
