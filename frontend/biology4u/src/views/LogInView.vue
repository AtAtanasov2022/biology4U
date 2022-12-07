<template>
    <div class="LogInView">
        <div class="inputContainer">
            <va-input class="inputField firstInput backgroundprimary" v-model="username" label="Потребителско име:" placeholder="Потребителско име:" />
            <va-input class="inputField" v-model="password" type="password" label="Парола:" placeholder="Парола:"/>
            <va-checkbox class="" v-model="rememberMe" :label="longLabel" />
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            username: "",
            password: "",
            rememberMe: false,
            longLabel: "Запомни ме"
        }
    }
}
</script>

<style >
.va-input-wrapper__container {
    display: flex;
    align-items: center;
    width: 21.25rem !important;
}

.LogInView {
    display: flex;
    justify-content: center;
}
.inputContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #D8F3DC;
    width: 34.25rem;
    height: 41rem;
    margin-top: 3.5rem;
}

.inputField {
    max-height: 3.125rem;
}

.firstInput {
    margin-top: 2rem;
    height: 3.188rem;
}
</style>