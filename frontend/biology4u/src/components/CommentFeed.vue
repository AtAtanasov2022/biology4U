<template>
    <div class="commentFeed">
        <h1>Comment Feed</h1>
        <div class="addCommentBox">
            <va-input  class="mb-6" id="commentInput"  v-model="userComment" type="textarea" label="Write your comment here..." autosize />
            <va-button @click="addComment" size="medium" class="mr-6 mb-2 ml-3" round>Add comment</va-button>
        </div>
        <div class="comment" v-for="comment in comments" :key="comment.id">
            <h2>{{ comment.creatorInfo.username }}</h2>
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

<style scoped>
    .commentFeed {
        padding: 0.5rem;
        margin: 1rem 0 0 0;
    }

    .addCommentBox {
        margin: 1rem 0 0 0;
    }

    .comment {
        margin: 1rem 0 0 0;
    }
</style>