<template>
    <div class="mainPage">
        <div class="accordionMenu">
            <va-accordion class="mainAccordion" v-model="opened">
                <va-collapse v-for="(group, idx) in menuItems" :key="idx" :header="group.title" text-color="textPrimary"
                    class="mainCollapse" color="textInverted" flat>
                    <va-accordion class="secondaryAccordion">
                        <va-collapse class="secondaryCollapse" v-for="(subTopic, id) in group.items" :key="id"
                            :header="subTopic.subTopicName" text-color="textPrimary" color="textInverted" flat>
                            <div class="subTopic">
                                <button @click="openSubTopic(subTopic.id)" class="accordionMenuOption">
                                    Лекция
                                </button>
                                <button :disabled="disableOptions" @click="openShortPlan(subTopic.id)"
                                    class="accordionMenuOption">Кратък план</button>
                                <button :disabled="disableOptions" @click="openAdditionalFiles(subTopic.id)"
                                    class="accordionMenuOption">Допълнителни файлове
                                </button>
                            </div>
                        </va-collapse>
                    </va-accordion>
                </va-collapse>
            </va-accordion>
        </div>
        <div class="topicBox">
            <h1>{{ subTopicInfo.sub_topic_name }}</h1>
            <p>
                This is the text from the subTopic with id = {{ subTopicInfo.TopicId }}
            </p>
        </div>
    </div>
</template>

<script>
import store from "@/store";
import SubTopicService from "@/services/subTopic.service";
import { mapGetters } from "vuex";
import router from "../router";

export default {
    data() {
        return {
            disableOptions: true,
            opened: [true, true, true, true, true],
            subTopicInfo: {}
        }
    },

    computed: {
        ...mapGetters({
            user: "getUserInfo",
            menuItems: "getMenuItems",
            subTopicInfo: "getSubTopicInfo",
        }),
    },

    created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.getSubtopics(this.$route.params.id)
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },

    beforeMount() {
        this.setDisableOptions();
        store.dispatch("getAllTopicsAndShortSubTopics");
        this.opened = [true, true, true, true, true];
    },

    beforeUpdate() {
        this.setDisableOptions();
        this.opened = [true, true, true, true, true];
    },

    methods: {
        getSubtopics(id) {
            return SubTopicService.getSubtopicInfo(id).then(
                (response) => {
                    this.subTopicInfo = response.data;
                }
            ).catch(() => { console.log("err") })
        },

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
    
<style >
.mainPage {
    display: flex;
    flex-direction: row;
}

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

.accordionMenuOption {
    /* width: 24.15rem; */
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
}

.topicBox {
    width: 70%;
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