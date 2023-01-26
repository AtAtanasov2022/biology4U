<template>
    <div class="mainPage">
        <!-- <topic-sidebar></topic-sidebar> -->
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
    // components:{
    //     TopicSidebar   
    // },
    data() {
        return {
            disableOptions: true,
            opened: [true, true, true, true, true],
            // test: true
            // subTopicInfo: {}
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
        // this.opened = [true, true, true, true, true];
    },

    beforeUpdate() {
        this.setDisableOptions();
        // this.opened = [true, true, true, true, true];
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
/* 
.accordionMenu {
    width: 30%;
}

.mainAccordion {
    width: 99%;
}

.mainCollapse {
    margin-top: 0.263rem;
}

.secondaryAccordion {
    width: 100%;
    margin: 0.163rem 0rem 0rem 0.425rem;
}

.secondaryCollapse {
    margin-top: 0.163rem;
}

.subTopic {
    padding: 0 0.2rem 0.5rem;
    display: flex;
    flex-direction: column;
}
*/

/* .accordionMenuOption {
    width: 24.15rem;
    display: flex;
    justify-content: center;
    width: 98%;
    height: 3rem;
    margin: 0.15rem 0rem 0rem 0.25rem;
    padding: 1rem 1.25rem 0rem 1.25rem;
    background-color: white;
    border-radius: 0.35rem;
    cursor: pointer;
    border: none;
}

.accordionMenuOption:disabled,
.accordionMenuOption[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: default;
} */

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