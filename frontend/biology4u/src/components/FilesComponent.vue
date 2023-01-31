<template>
    <div class="mainPage">
        <div class="topicBox">
            <h1> Additional files for {{ subTopicInfo.subTopicName }}</h1>
            <p>
                Those are the additionalFiles from the subTopic with id = {{ subTopicInfo.id }}
            </p>
        </div>
    </div>
</template>

<script>
import SubTopicService from "@/services/subTopic.service";

export default {
    data() {
        return {
            subTopicInfo: {
                subTopicName: "",
                id: ""
            }
        }
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