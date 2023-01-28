<!-- <template>
    <div>
        <div>
            <input type="text" placeholder="Comment">
            <button>Add</button>
        </div>
      <div v-for="comment in comments" :key="comment.id">
        {{ comment.content  }}
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  export default {
    data() {
      return { comments: [] };
    },

    computed: {
        ...mapGetters({
            user: "getUserInfo",
        }),
    },
  
    mounted() {
      const url = window.location.pathname;
  
      if (url === '/lection') {
        this.$store.dispatch('getCommentsForLection'); //dispatch request for getting all the comments for lection page 
      } else { //dispatch request for getting all the comments for other page 
        this.$store.dispatch('getCommentsForOtherPage');  
      }
  
      this.$store.commit('setComments', this.comments); //commit the response of the request to the store  
  
    }  												   //and set it to the component's data property 'comments' 
  
   };  					     //so that it can be used in v-for loop in template section of component. 
  
   </script> -->