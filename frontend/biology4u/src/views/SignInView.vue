<template>
    <div class="signInView">
        <div class="inputContainer">
            <va-input class="mb-4" v-model="username" label="Потребителско име:" placeholder="Потребителско име:" />
            <va-input class="mb-4" v-model="email" label="Имейл:" placeholder="Имейл:" />
            <va-input class="mr-4 mb-4" v-model="password" type="password" label="Парола:" placeholder="Парола:"/>
            <va-input class="mr-4 mb-4" v-model="repeatedPassword" type="password" label="Повторете паролата:" placeholder="Повторете паролата:"/>
            <va-select class="mb-4" label="Тип на потребителя" :options="options" v-model="userType" />
            <va-checkbox class="mb-4" v-model="termsAndServices" :label="label" />
            <va-checkbox class="mb-4" v-model="rememberMe" :label="longLabel" />
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
.inputContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>