<template>
    <div class="mainPage">
        <div class="topicBox">
            <div v-if="user.userType === 'teacher'" class="addFileContainer">

                <h1>Добавяне на файлове</h1>
                <hr />
                <label>Файл
                    <input type="file" accept=".jpg, .jpeg, .png, .pdf, .docx, .xlsx, .pptx" @change="handleFileUpload($event)" />
                </label>
                <br>
                <button v-on:click="submitFile()">Добавяне</button>

            </div>
            <h2> Допълнителни файлове за {{ subTopicInfo.subTopicName }}</h2>
            <div class="file" v-for="(file, index) in fileNames" :key="index">
                <h3>{{ file.username }}</h3>
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
                this.fileNames = [];
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
                this.fileNames.reverse();
            });
        },

        handleFileUpload(event) {
            this.file = event.target.files[0];
        },

        submitFile() {
            let formData = new FormData();
            formData.append('file', this.file);
            const data = {
                userId: this.user.userId,
                subTopicId: this.subTopicInfo.id
            }
            FileService.addFile(formData, data).then(response => {
                const element = {
                    id: response.id,
                    fileName: response.fileName,
                    username: this.user.username
                }
                this.fileNames.unshift(element);
            });
        },

        download(fileId) {
            FileService.download(fileId, this.subTopicInfo.id).then((response) => {
                console.log(response);
                const fileURL = window.URL.createObjectURL(new Blob([response.data]));
                const fileLink = document.createElement('a');
                fileLink.href = fileURL;
                const fileName = response.headers['content-disposition'].substring(21);
                fileLink.setAttribute('download', fileName);
                fileLink.setAttribute('target', '_blank');
                document.body.appendChild(fileLink);
                fileLink.click();
                fileLink.remove();
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

.file {
    margin-top: 1.5rem;
}

.addFileContainer {
    margin-bottom: 1.5rem;
}
</style>