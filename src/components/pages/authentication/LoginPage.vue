<template>
    <h1>Connexion</h1>
    <form @submit.prevent="submit" novalidate>
        <div>
           <InputCid label="Login" type="email" v-model="user.login" />
        </div>
        <div>
          <InputCid label="Mot de passe" type="password" v-model="user.password" />
        </div>

        <div>
            <Button type="submit">Se connecter</button>
        </div>
    </form>
</template>
<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputCid from '../../core/input/InputCid.vue';
</script>
<script>
export default {
    components:{
        Button,
        InputText,
        InputCid
    },
    methods:{
        submit(){
            //ev.preventDefault();
            console.log("user ", this.user);
        }
    },
    data(){
        return {user: {login: '', password: ''}};
    }
}
</script>