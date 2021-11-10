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
import { createI18n } from 'vue-i18n';
import langEN from './conf/cid.en.json';
import langFR from './conf/cid.fr.json';

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

const store = createStore(userStore);

const i18n = createI18n({
    locale: navigator.language,// 'fr',
    fallbackLocale: 'fr',
    messages: {
        fr: langFR,
        en: langEN
    }
});

createApp(App)
    .use(store)
    .use(router)
    .use(i18n)
    .use(PrimeVue, loc)
    .mount('#app');
