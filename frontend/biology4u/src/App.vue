<template>
  <nav class="navBar">
    <router-link class="routerLink" id="router1" to="/">Biology4U</router-link>
    <router-link class="routerLink" to="/home">Home</router-link> |
    <router-link class="routerLink" to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
  url(./fonts/Roboto-Bold.ttf) format("truetype");
}
body {
  margin: 0rem;
  padding: 0rem;
}

.routerLink {
  text-decoration: none;
}

#router1 {
  font-family: "Roboto";
  font-size: 2.5rem;
  color: #D8F3DC;
}

.navBar {
  height: 5.313rem;
  background-color: #2D6A4F;
  display: flex;
  align-items: center;
}
</style>
