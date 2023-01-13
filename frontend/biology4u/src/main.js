import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import '@mdi/font/css/materialdesignicons.css'

createApp(App).use(store).use(router).use(createVuestic({
    config: {
        colors: {
            variables: {
                // Default colors
                primary: '#40916c',
                secondary: '#ffffff',
                success: '#40e583',
                info: '#2c82e0',
                danger: '#e34b4a',
                warning: '#ffc200',
                gray: '#babfc2',
                dark: '#34495e',

                // Custom colors
                yourCustomColor: '#d0f55d',
            },
        },
    }
})).mount('#app')
