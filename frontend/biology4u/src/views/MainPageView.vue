<template>
    <div class="mainPage">
        <div class="topicBox">
            <h1 class="topicBoxHeader1">
                What is Lorem Ipsum?
            </h1>
            <p class="topicBoxParagraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </div>
</template>

<script>
import store from "@/store";
import { mapGetters } from "vuex";
import router from "../router";

export default {
    data() {
        return {
            disableOptions: true,
            opened: [true, true, true, true, true],
        }
    },

    computed: {
        ...mapGetters({
            user: "getUserInfo",
            menuItems: "getMenuItems",
            subTopicInfo: "getSubTopicInfo",
        }),
    },

    beforeMount() {
        this.setDisableOptions();
        store.dispatch("getAllTopicsAndShortSubTopics");
    },

    beforeUpdate() {
        this.setDisableOptions();
    },

    methods: {
        openSubTopic(id) {
            router.push("/main/topic/" + id);
        },

        openShortPlan(id) {
            router.push("/main/plan/" + id);
        },

        openAdditionalFiles(id) {
            router.push("/main/files/" + id);
        },

        setDisableOptions() {
            if (this.user.username) {
                this.disableOptions = undefined;
            } else {
                this.disableOptions = true;
            }
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

.topicBoxHeader1 {
    text-align: center;
}

.topicBoxParagraph {
    text-align: justify;
    margin-top: 3rem;
}
</style>