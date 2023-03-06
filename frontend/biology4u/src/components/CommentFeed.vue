<template>
    <div class="commentFeed">
        <h1>Коментари</h1>
        <div class="addCommentBox">
            <va-input class="mb-6" id="commentInput" v-model="userComment" type="textarea"
                label="Напишете вашият коментар тук" autosize />
            <va-button @click="addComment" size="medium" class="mr-6 mb-2 ml-3" round>Add comment</va-button>
        </div>
        <div class="comment" v-for="comment in comments" :key="comment.id">
            <h2>{{ comment.creatorInfo.username || user.username }}</h2>
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
        '$route.params'() {
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
                this.comments = response.reverse();
            })
        },

        addComment() {
            if (this.userComment.trim() === "") {
                this.userComment = "Безмълвен съм!";
            }
            const subTopicId = this.$route.params.id;
            const commentInfo = {
                content: this.userComment,
                UserId: this.user.userId,
                SubTopicId: subTopicId
            }
            CommentService.addComment(commentInfo).then((data) => {
                const comment = {
                    id: data.id,
                    content: data.content,
                    UserId: data.UserId,
                    SubTopicId: data.SubTopicId,
                    creatorInfo: {
                        username: this.user.username
                    }
                }
                this.comments.unshift(comment);
            });

            this.userComment = "";
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

.addCommentBox va-input {
    padding: 2rem;
}

.comment {
    margin: 1rem 0 0 0;
}
</style>