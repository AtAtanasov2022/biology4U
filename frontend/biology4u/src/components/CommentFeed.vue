<template>
    <div>
        <div>
            <va-input class="mb-6" v-model="userComment" type="textarea" label="Write your comment here..." autosize />
            <va-button @click="addComment" size="large" class="mr-6 mb-2" round>Add comment</va-button>
        </div>
        <div v-for="comment in comments" :key="comment.id">
            <h3>Creator {{ comment.creatorInfo.username }}</h3>
            <p>{{ comment.content }}</p>
        </div>
    </div>
</template>
  
<script>
import { mapGetters } from "vuex";
import CommentService from "@/services/comment.service";
export default {
    name: "comments-feed",
    data() {
        return { 
            comments: [], 
            userComment: "" 
        };
    },

    computed: {
        ...mapGetters({
            user: "getUserInfo",
        }),
    },

    watch: {
        '$route'() {
            this.getComments();
        }
    },

    beforeMount() {
        this.getComments();
    },

    methods: {
        getComments() {
            const subTopicId = this.$route.params.id;
            CommentService.getAllCommentsAndUserInfo(subTopicId).then(response => {
                this.comments = response;
                console.log(this.comments);
            })
        },

        addComment() {
            const subTopicId = this.$route.params.id;
            const commentInfo = {
                content: this.userComment,
                UserId: JSON.parse(this.user.userId),
                SubTopicId: JSON.parse(subTopicId)
            }
            console.log(commentInfo);
            CommentService.addComment(commentInfo);
        }
    }

}

</script>