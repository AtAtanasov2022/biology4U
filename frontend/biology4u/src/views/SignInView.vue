<template>
    <div class="signInView">
        <div class="inputContainer">
            <input class="inputField firstInputField" v-model="username" placeholder="Потребителско име:">
            <input class="inputField" v-model="email" placeholder="Имейл:">
            <input class="inputField" v-model="password" type="password" placeholder="Парола:">
            <input class="inputField" v-model="repeatedPassword" type="password" placeholder="Повторете паролата:">
            <va-select background-color="#ffffff" label="Тип на потребителя" :options="options" v-model="userType"/>
            <button class="button" @click="signIn">Регистрация</button>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            username: "",
            email: "",
            password: "",
            repeatedPassword: "",
            userType: "",
            options: ["учител", "ученик"],
        }
    },
    methods: {
        signIn() {

        }
    } 
}
</script>

<style scoped>

@font-face {
  font-family: "RobotoRegular";
  src: local("Roboto"), url(../fonts/Roboto-Regular.ttf) format("truetype");
}

div.va-dropdown.va-select.va-select__dropdown.va-select-dropdown {
    width: 21.25rem;
    margin: 1.5rem auto 0rem auto;
}

.signInView {
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
    width: 21.25rem;
    height: 3.188rem;
    border-radius: 0.625rem;
    border: thin solid;
    margin-top: 1.5rem;
}

.firstInputField {
    margin-top: 3.5rem;
}
.button {
  margin: 2rem auto 2rem auto;
  font-family: "RobotoRegular";
  font-size: 1.563rem;
  color: #ffffff;
  background-color: #40916c;
  border-radius: 1rem;
  width: 12.813rem;
  height: 3.313rem;
  border: none;
  cursor: pointer;
}
</style>