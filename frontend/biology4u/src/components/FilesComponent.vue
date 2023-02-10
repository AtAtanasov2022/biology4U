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
            <div v-for="(file, index) in fileNames" :key="index">
                <a style="cursor: pointer" @click="download(file.id)">{{ file.fileName }}</a>
            </div>
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
            },
            file: null,
            fileNames: []
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
                this.getSubtopics(this.$route.params.id).then(() => {
                    return this.getFiles(this.subTopicInfo.id);
                });
            },
            { immediate: true }
        )
    },

    methods: {
        async getSubtopics(id) {
            return SubTopicService.getSubtopicInfo(id).then(
                (response) => {
                    this.subTopicInfo = response;
                }
            ).catch(() => { console.log("err") })
        },

        async getFiles(id) {
            return FileService.getAllFiles(id).then((files) => {
                this.fileNames.push(...files);
            });
        },

        handleFileUpload(event) {
            this.file = event.target.files[0];
            console.log(this.file);
        },

        submitFile() {
            let formData = new FormData();
            formData.append('asd', this.file);
            const data = {
                userId: this.user.userId,
                subTopicId: this.subTopicInfo.id
            }
            FileService.addFile(formData, data).then(response => {
                this.fileNames.push(response.fileName);

                console.log(response);
            });
        },

        download(fileId) {
            FileService.download(fileId, this.subTopicInfo.id).then((response) => {
                console.log(response);
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'file.pdf');
                document.body.appendChild(link);
                link.click();
            });
        }
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