<template>
    <h1>Connexion</h1>
    <form @submit.prevent="submit" novalidate>
        <div>
           <InputMail label="Login" v-model="user.login" @status-change="mailChangeStatus" />
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
import InputMail from '../../core/input/InputMail.vue';
</script>
<script>
export default {
    components:{
        Button,
        InputText,
        InputCid,
        InputMail
    },
    methods:{
        submit(){
            //ev.preventDefault();
            console.log("user ", this.user);
        },
        mailChangeStatus(status){
            console.log('mail change', status);
        }
    },
    data(){
        return {user: {login: '', password: ''}};
    }
}
</script>