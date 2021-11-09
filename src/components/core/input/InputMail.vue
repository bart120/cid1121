<template>
    <InputCid type="email" v-bind="this.$attrs"  v-model="value"/>
    <p v-if="!valid" style="color: red">
        Adresse mail invalide
    </p>
</template>
<script setup>
import InputCid from './InputCid.vue'
</script>
<script>
const regMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default {
    components:{
        InputCid
    },
    data(){
        return {value: '', valid: true};
    },
    watch:{
        value(newVal, oldVal){
            validate(newVal);
        }
    },
    methods:{
        validate(mail){

        }
    }
}
</script>