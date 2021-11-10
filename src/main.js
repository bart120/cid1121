import { createApp } from 'vue';
import App from './App.vue';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import PrimeVue from 'primevue/config';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './conf/routes';
import loc from './conf/locale';
import userStore from './store/userStore';
import { createStore } from 'vuex';

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

const store = createStore(userStore);

createApp(App)
    .use(store)
    .use(router)
    .use(PrimeVue, loc)
    .mount('#app');
