<template>
    <nav>
        <Menubar :model="items">
            <template #end>
                <div v-if="! isConnected">
                    <router-link to='/login'>Se connecter</router-link>
                </div>
                <div v-else>
                    Bonjour {{user.name}}
                    <Button type="button" @click="logout">Se déconnecter</Button>
                </div>
            </template>
        </Menubar>
    </nav>
   
</template>

<script setup>
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import {mapGetters, mapActions} from 'vuex';
</script>
<script>
export default {
    components:{
        Menubar,
        Button
    },
    computed:{
        ...mapGetters(['user', 'isConnected'])
    },
    methods:{
        ...mapActions(['logout']),
        /*deco(){
            this.logout();
        }*/
    },
    data(){
        return {
            items: [
                {
                    label: 'Accueil',
                    icon: 'pi pi-fw pi-file',
                    to: '/'
                },{
                    label: this.$t('menu.cars'),
                    items:[
                        {label: 'Ajouter', to:'/cars/add'},
                        {label: 'Lister', to: '/cars/list'},
                        {label: 'Rechercher', to: '/cars/search'}
                    ]
                }
            ]
            //user:null
        };
    },
    mounted(){
        console.log(this);
        console.log(this.$store)
        //this.user = JSON.parse(sessionStorage.getItem('USER'));
    }
}
</script>