<template>
    <div class="signUpView">
        <div class="inputContainer">
            <input class="inputField firstInputField" v-model="username" placeholder="Потребителско име:">
            <input class="inputField" v-model="email" placeholder="Имейл:">
            <input class="inputField" v-model="password" type="password" placeholder="Парола:">
            <input class="inputField" v-model="repeatedPassword" type="password" placeholder="Повторете паролата:">
            <input class="inputField" v-model="firstname" placeholder="Име:">
            <input class="inputField" v-model="lastname" placeholder="Фамилия:">
            <label class="userTypeLabel" for="user-types">Тип на потребителя:</label>
            <select v-model="userType" name="user-types" class="userTypeSelect" placeholder="Тип на потребителя">
                <option value="student">Ученик</option>
                <option value="teacher">Учител</option>
            </select>
            <button class="buttonSignUp" @click="signUp">Регистрация</button>
        </div>
    </div>
</template>

<script>
import store from '@/store';

export default {
    data() {
        return {
            username: "",
            email: "",
            password: "",
            repeatedPassword: "",
            firstname: "",
            lastname: "",
            userType: "",
        }
    },
    methods: {
        signUp() {
            const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

            this.username = this.username.trim();
            this.password = this.password.trim();
            this.email = this.email.trim();
            this.firstname = this.firstname.trim();
            this.lastname = this.lastname.trim();

            if (this.password != this.repeatedPassword) {
                alert("Паролите не съвпадат.")
            } else if (this.username === "" || this.password === "" ||
                this.email === "" || this.firstname === "" ||
                this.lastname === "" || this.userType === "") {
                alert("Попълнете всички полета и опитайте отново.")
            } else if (regexExp.test(this.email.trim()) === false) {
                alert("Въведете валиден имейл адрес.");
            } else {
                const userInfo = {
                    username: this.username,
                    userPassword: this.password,
                    email: this.email,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    userType: this.userType
                };

                store.dispatch("signUpUser", userInfo);
            }
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

.signUpView {
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
    margin-top: 3.5rem;
}

.buttonSignUp {
    margin: 2rem auto 2rem auto;
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

.userTypeLabel {
    margin-top: 1rem;
    width: 72%;
}

.userTypeSelect {
    width: 72%;
    height: 2.188rem;
    border-radius: 0.625rem;
    border: thin solid;
    padding-left: 1rem;
    margin-top: 0.3rem;
}
</style>