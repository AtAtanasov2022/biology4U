<template>
    <div class="LogInView">
        <div class="inputContainer">
            <input class="inputField firstInputField" v-model="username" placeholder="Потребителско име:">
            <input class="inputField" v-model="password" type="password" placeholder="Парола:">
            <button class="buttonLogIn" @click="logIn">Вход</button>
        </div>
    </div>
</template>

<script>
import store from '@/store';

export default {
    data() {
        return {
            username: "",
            password: "",
        }
    }, 
    methods: {
        logIn() {
            const userInfo = {
                username: this.username,
                userPassword: this.password
            };

            store.dispatch("logInUser", userInfo);
        }
    }
}
</script>

<style scoped>
.LogInView {
    display: flex;
    justify-content: center;
}
.inputContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #D8F3DC;
    width: 35%;
    height: 100%;
    margin-top: 3.5rem;
    border-radius: 0.625rem;
}

.inputField {
    width: 72%;
    height: 3.188rem;
    border-radius: 0.625rem;
    border: thin solid;
    margin-top: 1.5rem;
    padding: 1rem;
}

.firstInputField {
    margin-top: 8.5rem;
}

.buttonLogIn {
  margin: 6rem auto 5rem auto;
  font-family: "RobotoRegular";
  font-size: 1.563rem;
  color: #ffffff;
  background-color: #40916c;
  border-radius: 1rem;
  width: 43%;
  height: 3.313rem;
  border: none;
  cursor: pointer;
}
</style>