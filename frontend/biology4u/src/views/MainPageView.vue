<template>
    <div class="mainPage">
        <div class="topicBox">
            <h1 class="topicBoxHeader1">
                Здравейте!
            </h1>
            <p class="topicBoxParagraph">
                Добре дошли в Biology4U, вашата крайна дестинация за учене и изследване на очарователния свят на биологията! Ние сме развълнувани да ви приемем на борда и нямаме търпение да се впуснем заедно в това вълнуващо пътешествие на открития. Независимо дали сте студент, изследовател или просто човек с голям интерес към биологията, ние имаме по нещо за всеки.</p>
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