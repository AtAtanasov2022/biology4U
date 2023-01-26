<template>
    <div class="LogInView">
        <div class="inputContainer">
            <input class="inputField firstInputField" @keyup.enter="logIn" v-model="username" placeholder="Потребителско име:">
            <input class="inputField" @keyup.enter="logIn" v-model="password" type="password" placeholder="Парола:">
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
            this.username = this.username.trim();
            this.password = this.password.trim();

            if (this.password === "" || this.username === "") {
                alert("Попълнете всички полета и опитайте отново")
            } else {
                const userInfo = {
                    username: this.username,
                    userPassword: this.password
                };

                store.dispatch("logInUser", userInfo);
            }
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
    width: 25%;
    height: 100%;
    margin-top: 3.5rem;
    border-radius: 0.625rem;
}

.inputField {
    width: 72%;
    height: 2.188rem;
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
    font-size: 1.2rem;
    color: #ffffff;
    background-color: #40916c;
    border-radius: 1rem;
    width: 43%;
    height: 2.8rem;
    border: none;
    cursor: pointer;
}
</style>