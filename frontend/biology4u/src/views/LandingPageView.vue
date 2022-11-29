<template>
  <div class="landingPage">
    <!-- //Carousel -->
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

export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      userType: "",
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

<style></style>
