import Vue from 'vue';
import Router from 'vue-router';
import AnimalsList from '@/components/AnimalsList';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/vue-drag-and-drop/',
    routes: [
        {
            path: '/',
            name: 'AnimalsList',
            component: AnimalsList
        }
    ]
})
