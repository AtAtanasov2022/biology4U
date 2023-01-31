<template>
    <div class="mainPage">
        <div class="topicBox">
            <h1>{{ subTopicInfo.subTopicName }}</h1>
            <p>
                This is the text from the subTopic with id = {{ subTopicInfo.id }}
            </p>
            <p>
                {{ subTopicInfo.content }}
            </p>

            <CommentFeed v-if="user.username"></CommentFeed>
        </div>
    </div>
</template>

<script>
import SubTopicService from "@/services/subTopic.service";
import CommentFeed from "@/components/CommentFeed.vue"
import { mapGetters } from "vuex";

export default {
    components: {
        CommentFeed
    },
    data() {
        return {
            subTopicInfo: {
                subTopicName: "",
                id: ""
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