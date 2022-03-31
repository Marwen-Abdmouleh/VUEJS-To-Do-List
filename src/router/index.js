import { createWebHistory, createRouter } from 'vue-router'
import Home from '../components/Home.vue'
import Produit from '../components/Produit.vue'
import NotFound from '../components/NotFound.vue'


const routes = [
    { path: "/", component: Home }, 

    { path: "/produits", component: Produit , name:"Produit" }, 

    { path: "/:catchAll(.*)", component: NotFound ,name:"NotFound"  },  
];

const router = new createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router;