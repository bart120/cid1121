import HomePage from '../components/pages/HomePage.vue';
//import CarAddPage from '../components/pages/cars/CarAddPage.vue';
//import CarListPage from '../components/pages/cars/CarListPage.vue';
import CarSearchPage from '../components/pages/cars/CarSearchPage.vue';
import LoginPage from '../components/pages/authentication/LoginPage.vue';

const CarAddPage = () => import(/* webpackChunkName: "cars" */'../components/pages/cars/CarAddPage.vue');
const CarListPage = () => import(/* webpackChunkName: "cars" */'../components/pages/cars/CarListPage.vue');

export default [
    { path: '/', component: HomePage },
    { path: '/cars/add', component: CarAddPage },
    { path: '/cars/list', component: CarListPage },
    { path: '/cars/search', component: CarSearchPage },
    { path: '/login', component: LoginPage }
]