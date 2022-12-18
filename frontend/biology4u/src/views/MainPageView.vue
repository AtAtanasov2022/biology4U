<template>
    <div class="mainPage">
        <div class="accordionMenu">
            <va-accordion v-model="opened" style="width: 25rem;">
                <va-collapse v-for="(group, idx) in items" :key="idx" :header="group.title" text-color="textPrimary" style="margin-top: 0.263rem"
                    color="textInverted" flat>
                    <va-accordion  style="width: 24.575rem; margin: 0.163rem 0rem 0rem 0.425rem;">
                        <va-collapse style="margin-top: 0.163rem" v-for="(subTopic, id) in subTopics" :key="id" :header="subTopic.title"
                            text-color="textPrimary" color="textInverted" flat>
                            <div class="subTopic">
                                <div class="accordionMenuOption">
                                    <p>Лекция</p>
                                </div>
                                <div class="accordionMenuOption">
                                    <p>Кратък план</p>
                                </div>
                                <div class="accordionMenuOption">
                                    <p>Допълнителни файлове</p>
                                </div>
                            </div>
                        </va-collapse>
                    </va-accordion>
                </va-collapse>
            </va-accordion>
        </div>
        <div class="topicBox">

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
}
</script>
    
<style >
.accordionMenu {
    width: 30%;
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
}
</style>