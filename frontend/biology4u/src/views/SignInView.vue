<template>
    <div class="signInView">
        <div class="inputContainer">
            <va-input class="inputField firstInput" v-model="username" label="Потребителско име:" placeholder="Потребителско име:" />
            <va-input class="inputField" v-model="email" label="Имейл:" placeholder="Имейл:" />
            <va-input class="inputField" v-model="password" type="password" label="Парола:" placeholder="Парола:"/>
            <va-input class="inputField" v-model="repeatedPassword" type="password" label="Повторете паролата:" placeholder="Повторете паролата:"/>
            <va-select class="" label="Тип на потребителя" :options="options" v-model="userType" />
            <va-checkbox class="" v-model="termsAndServices" :label="label" />
            <va-checkbox class="" v-model="rememberMe" :label="longLabel" />
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
            termsAndServices: false,
            rememberMe: false,
            options: ["учител", "ученик"],
            label: "Условия",
            longLabel: "Запомни ме"
        }
    }
}
</script>

<style scoped>
div.va-input-wrapper__conteiner {
    background-color: white;
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
    width: 34.25rem;
    height: 34rem;
    margin-top: 2.5rem;
}

.inputField {
    max-height: 3.125rem;
}

.firstInput {
    margin-top: 2rem;
}
</style>