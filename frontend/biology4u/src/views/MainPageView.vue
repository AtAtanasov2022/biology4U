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
                                <div @click="openSubTopic(subTopic.id)" class="accordionMenuOption">
                                    <p>Лекция</p>
                                </div>
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
        <div v-if="lection" class="topicBox">
            <h1 v-if="welcomeTopicBox" class="topicBoxHeader1">
                What is Lorem Ipsum?
            </h1>
            <h1 v-else>{{ subTopicInfo.label }}</h1>
            <p v-if="welcomeTopicBox" class="topicBoxParagraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p v-else>
                This is the text from the subTopic with id = {{ subTopicInfo.id }}
            </p>
        </div>
        <div v-else-if="shortPlan" class="topicBox">
            <h1>Short plan for {{ subTopicInfo.label }}</h1>
            <p>
                This is the short plan from the subTopic with id = {{ subTopicInfo.id }}
            </p>
        </div>
        <div v-else-if="additionalFiles" class="topicBox">
            <h1> Additional files for{{ subTopicInfo.label }}</h1>
            <p>
                Those are the additionalFiles from the subTopic with id = {{ subTopicInfo.id }}
            </p>
        </div>
    </div>
</template>

<script>
import store from "@/store";
import axios from "axios";
import { mapGetters } from "vuex";
import router from "../router";

export default {
    data() {
        return {
            lection: true,
            shortPlan: false,
            additionalFiles: false,
            disableOptions: true,
            welcomeTopicBox: true,
            subTopicInfo: {},
            opened: [true, true, true],
        }
    },

    computed: {
        ...mapGetters({
            user: "getUserInfo",
            menuItems: "getMenuItems"
        }),
    },

    beforeMount() {
        this.getSubtopics(3);

        this.setDisableOptions();
        this.setMainPageBasedOnTheIdValue();
        store.dispatch("getAllTopicsAndShortSubTopics");
    },

    beforeUpdate() {
        this.opened = [true, true, true];
        this.setDisableOptions();
        this.setMainPageBasedOnTheIdValue();
        store.dispatch("getAllTopicsAndShortSubTopics");
    },

    methods: {
        getSubtopics(id) {
            axios.get(`http://localhost:5001/api/v1/subTopics/${id}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }).then(
                console.log
            ).catch(() => { console.log("err") })
        },

        openSubTopic(id) {
            router.push("/main/" + id);
            this.lection = true;
            this.shortPlan = false;
            this.additionalFiles = false;
        },

        openShortPlan(id) {
            router.push("/main/" + id);
            this.lection = false;
            this.shortPlan = true;
            this.additionalFiles = false;
        },

        openAdditionalFiles(id) {
            router.push("/main/" + id);
            this.lection = false;
            this.shortPlan = false;
            this.additionalFiles = true;
        },

        setDisableOptions() {
            if (this.user.username) {
                this.disableOptions = undefined;
            } else {
                this.disableOptions = true;
            }
        },

        setMainPageBasedOnTheIdValue() {
            let productId = this.$route.params.id;
            if (productId == undefined) {
                this.welcomeTopicBox = true;
            } else {
                this.welcomeTopicBox = false;
                //get zayavka
                for (let index = 0; index < this.items.length; index++) {
                    for (let index2 = 0; index2 < this.items[index].items.length; index2++) {
                        if (this.items[index].items[index2].id == productId) {
                            this.subTopicInfo = this.items[index].items[index2];
                        }
                    }

                }
            }
        }
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