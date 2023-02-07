<template>
    <div class="mainPage">
        <div class="topicBox">
            <div v-if="user.userType === 'teacher'" class="container">
                <div>
                    <h2>Добавяне на файлове</h2>
                    <hr />
                    <label>Файл
                        <input type="file" @change="handleFileUpload($event)" />
                    </label>
                    <br>
                    <button v-on:click="submitFile()">Добавяне</button>
                </div>
            </div>
            <h1> Additional files for {{ subTopicInfo.subTopicName }}</h1>
            <p>
                Those are the additionalFiles from the subTopic with id = {{ subTopicInfo.id }}
            </p>
        </div>
    </div>
</template>

<script>
import FileService from "@/services/file.service";
import SubTopicService from "@/services/subTopic.service";
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            subTopicInfo: {
                subTopicName: "",
                id: "",
                file: "",
            }
        }
    },

    computed: {
        ...mapGetters({
            user: "getUserInfo",
        }),
    },

    created() {
        this.$watch(
            () => this.$route.params,
            () => {
                this.getSubtopics(this.$route.params.id)
            },
            { immediate: true }
        )
    },

    methods: {
        getSubtopics(id) {
            return SubTopicService.getSubtopicInfo(id).then(
                (response) => {
                    this.subTopicInfo = response;
                }
            ).catch(() => { console.log("err") })
        },

        handleFileUpload(event) {
            this.file = event.target.files[0];
            console.log(this.file);
        },

        submitFile() {
            let formData = new FormData();
            formData.append('file', this.file);
            FileService.addFile(formData);
        },
    },
}
</script>
    
<style scoped>
.mainPage {
    display: flex;
    flex-direction: row;
    margin-left: 30%;
}

.topicBox {
    width: 100%;
    min-height: 45rem;
    padding: 4rem;
    background-color: white;
}
</style>