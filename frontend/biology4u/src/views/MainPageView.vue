<template>
    <div class="mainPage">
        <div class="accordionMenu">
            <va-accordion v-model="value" style="width: 400px;">
                <va-collapse v-for="(group, idx) in items" :key="idx" :header="group.title" text-color="textPrimary"
                    color="textInverted" flat>
                    <div style="padding: 0 1rem 0.75rem;">
                        <router-link v-for="(navItem, idx) in group.items" :key="idx" class="nav-item" :to="navItem.to">
                            {{ navItem.label }}
                        </router-link>
                    </div>
                </va-collapse>
            </va-accordion>
        </div>
        <div class="topicBox">

        </div>
    </div>
</template>

<script>
    export default {
  data () {
    return {
      value: [true, true, true],
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
    }
  },
}
</script>
    
<style >
.accordionMenu {
    width: 30%;
    /* height: 20rem; */
    border: solid black;
    display: flex;

}
</style>