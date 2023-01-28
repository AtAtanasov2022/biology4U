<template>
    <div>
        <!-- <div>
            <input type="text" placeholder="Comment">
            <button>Add</button>
        </div> -->
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
        return { comments: [] };
    },

    computed: {
        ...mapGetters({
            user: "getUserInfo",
        }),
    },

    watch: {
      '$route' () {
        const subTopicId = this.$route.params.id;
        console.log(subTopicId);
        CommentService.getAllCommentsAndUserInfo(subTopicId).then(response => {
            this.comments = response;
            console.log(this.comments);
        })
      }
    },

    beforeMount() {
        
    },
    // watch the url and on change do console.log()

    updated() {
        const subTopicId = this.$route.params.id;
        console.log(subTopicId);
        CommentService.getAllCommentsAndUserInfo(subTopicId).then(response => {
            this.comments = response;
            console.log(this.comments);
        })
    }

}

</script>