<template>
    <nav>
        <Menubar :model="items">
            <template #end>
                <router-link to='/login'>Se connecter</router-link>
            </template>
        </Menubar>
    </nav>
   
</template>

<script setup>
import Menubar from 'primevue/menubar';
</script>
<script>
export default {
    components:{
        Menubar
    },
    data(){
        return {
            items: [
                {
                    label: 'Accueil',
                    icon: 'pi pi-fw pi-file',
                    to: '/'
                },{
                    label: 'Voiture',
                    items:[
                        {label: 'Ajouter', to:'/cars/add'},
                        {label: 'Lister', to: '/cars/list'},
                        {label: 'Rechercher', to: '/cars/search'}
                    ]
                }
            ]
        };
    }
}
</script>