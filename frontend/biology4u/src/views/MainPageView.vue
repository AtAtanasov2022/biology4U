<template>
    <div class="mainPage">
        <div class="accordionMenu">
            <va-accordion class="mainAccordion" v-model="opened">
                <va-collapse v-for="(group, idx) in items" :key="idx" :header="group.title" text-color="textPrimary"
                    class="mainCollapse" color="textInverted" flat>
                    <va-accordion class="secondaryAccordion">
                        <va-collapse class="secondaryCollapse" v-for="(subTopic, id) in subTopics" :key="id"
                            :header="subTopic.title" text-color="textPrimary" color="textInverted" flat>
                            <div class="subTopic">
                                <div class="accordionMenuOption">
                                    <p>Лекция</p>
                                </div>
                                <div v-if="userLoggedIn" class="accordionMenuOption">
                                    <p>Кратък план</p>
                                </div>
                                <div v-if="userLoggedIn" class="accordionMenuOption">
                                    <p>Допълнителни файлове</p>
                                </div>
                            </div>
                        </va-collapse>
                    </va-accordion>
                </va-collapse>
            </va-accordion>
        </div>
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
export default {
    data() {
        return {
            userLoggedIn: true,
            opened: [true, true, true],
            items: [
                {
                    title: 'UI Elements',
                    items: [
                        { label: 'Button', to: '/ui-elements/button' },
                        { label: 'Data Table', to: '/ui-elements/table' },
                        { label: 'Radio', to: '/ui-elements/radio' },
                    ],
                },
                {
                    title: 'Services',
                    items: [
                        { label: 'Global Config', to: '/services/global-config' },
                        { label: 'Breakpoint Service', to: '/services/breakpoints' },
                    ],
                },
                {
                    title: 'Styles',
                    items: [
                        { label: 'Colors', to: '/styles/colors' },
                        { label: 'Typography', to: '/styles/typography' },
                    ],
                },
            ],
            subTopics: [
                {
                    title: 'SubTopic1',
                },
                {
                    title: 'SubTopic2',
                },
                {
                    title: 'SubTopic3',
                },
            ],
        }
    },

    beforeUpdate() {
        this.opened = [true, true, true];
    }
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
    width: 100%;
    height: 3rem;
    margin: 0.15rem 0rem 0rem 0.25rem;
    padding: 1rem 1.25rem 0rem 1.25rem;
    background-color: white;
    border-radius: 0.35rem;
    cursor: pointer;
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