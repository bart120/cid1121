<template>
    <h1>Connexion</h1>
    <form @submit.prevent="submit">
        <div>
            <span class="p-float-label">
                <InputText id="email" type="email" />
                <label for="email">Login</label>
            </span>
        </div>
        <div>
            <span class="p-float-label">
                <InputText id="password" type="password" />
                <label for="password">Mot de passe</label>
            </span>
        </div>

        <div>
            <Button type="submit">Se connecter</button>
        </div>
    </form>
</template>
<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
</script>
<script>
export default {
    components:{
        Button,
        InputText
    },
    methods:{
        submit(){
            //ev.preventDefault();
            
            console.log("test");
        }
    }
}
</script>