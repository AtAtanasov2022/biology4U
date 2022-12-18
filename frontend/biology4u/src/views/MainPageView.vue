<template>
    <div class="mainPage">
        <div class="accordionMenu">
            <va-accordion v-model="opened" style="width: 400px;">
                <va-collapse v-for="(group, idx) in items" :key="idx" :header="group.title" text-color="textPrimary"
                    color="textInverted" flat>
                    <!--v-for="(subTopic, id) in subTopics" :key"id"-->
                    <va-accordion v-model="opened2" style="width: 400px;">
                        <va-collapse v-for="(subTopic, id) in subTopics" :key="id" :header="subTopic.title"
                            text-color="textPrimary" color="textInverted" flat>
                            <!--v-for="(subTopic, id) in subTopics" :key"id"-->
                            <div class="subTopic">
                                <div>
                                    <p>Лекция</p>
                                </div>
                                <div>
                                    <p>Кратък план</p>
                                </div>
                                <div>
                                    <p>Допълнителни файлове</p>
                                </div>
                            </div>
                        </va-collapse>
                    </va-accordion>
                </va-collapse>
            </va-accordion>
            <!-- <va-accordion v-model="opened" style="width: 400px;">
                <va-collapse v-for="(group, idx) in items" :key="idx" :header="group.title" text-color="textPrimary"
                    color="textInverted" flat>
                    v-for="(subTopic, id) in subTopics" :key"id"
                    <div class="subTopic">
                        <div>
                            <p>Лекция</p>
                        </div>
                        <div>
                            <p>Кратък план</p>
                        </div>
                        <div>
                            <p>Допълнителни файлове</p>
                        </div>
                    </div>
                </va-collapse>
            </va-accordion> -->
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
            opened2: [false, false, false],
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
    padding: 0 1rem 0.75rem;
    display: flex;
    flex-direction: column;
    border: solid black;
}
</style>