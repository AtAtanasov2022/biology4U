<template>
    <div class="accordionMenu">
        <va-accordion class="mainAccordion">
            <va-collapse v-for="(group, idx) in menuItems" :model-value="isExpanded(sidebar.openedTopicId, idx)"
                @click.stop="toggle('openedTopicId',idx)" :key="idx" :header="group.title" text-color="textPrimary" class="mainCollapse"
                color="textInverted" flat>
                <va-accordion class="secondaryAccordion">
                    <va-collapse :model-value="isExpanded(sidebar.openedSubtopicId, id)"
                        @click.stop="toggle('openedSubtopicId',id)"
                         class="secondaryCollapse"
                        v-for="(subTopic, id) in group.items" :key="id" :header="subTopic.subTopicName"
                        text-color="textPrimary" color="textInverted" flat>
                        <div class="subTopic">
                            <button @click.stop="open(`topic/${subTopic.id}`)" class="accordionMenuOption">
                                Лекция
                            </button>
                            <button :disabled="disableOptions" @click.stop="open(`plan/${subTopic.id}`)"
                                class="accordionMenuOption">Кратък план</button>
                            <button :disabled="disableOptions" @click.stop="open(`files/${subTopic.id}`)"
                                class="accordionMenuOption">Допълнителни файлове
                            </button>
                        </div>
                    </va-collapse>
                </va-accordion>
            </va-collapse>
        </va-accordion>
    </div>
</template>

<script>
import store from "@/store";
import SubTopicService from "@/services/subTopic.service";
import { mapGetters } from "vuex";
import router from "../../router";

export default {
    name: "topic-sidebar",
    data() {
        return {
            disableOptions: true,
            test: true
        }
    },

    computed: {
        ...mapGetters({
            menuItems: "getMenuItems",
            sidebar: "sidebarState",
            user: "getUserInfo",
        }),
    },

    created() {
        // watch the params of the route to fetch the data again
        // this.$watch(
        //     () => this.$route.params,
        //     () => {
        //         this.getSubtopics(this.$route.params.id)
        //     },
        //     // fetch the data when the view is created and the data is
        //     // already being observed
        //     { immediate: true }
        // )
    },

    beforeMount() {
        this.setDisableOptions();
        store.dispatch("getAllTopicsAndShortSubTopics");
    },

    beforeUpdate() {
        this.setDisableOptions();
    },

    methods: {
        open(location) {
            router.push(`/main/${location}`);
        },

        getSubtopics(id) {
            return SubTopicService.getSubtopicInfo(id).then(
                (subtopics) => {
                    this.subTopicInfo = subtopics;
                }
            ).catch(() => { console.log("err") })
        },

        setDisableOptions() {
            if (this.user.username) {
                this.disableOptions = undefined;
            } else {
                this.disableOptions = true;
            }
        },

        isExpanded(sidebarId, itemId) {
            return sidebarId == itemId;
        },

        toggle(key,id) {
            // console.log(event);
            if (this.sidebar[key] == id) {
                //close
                store.dispatch('openTopic', {
                    ...this.sidebar,
                    [key]: -1,
                });
            }else{
                //open
                store.dispatch('openTopic', {
                    ...this.sidebar,
                    [key]: id,
                });
            }
        }
    },
}
</script>
    
<style>
.accordionMenu {
    width: 30%;
    position: absolute;
    background: whitesmoke;
    left: 0.2rem;
    z-index: 1;
    border-radius: 0.3rem;
    padding: 0.2rem;
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
</style>