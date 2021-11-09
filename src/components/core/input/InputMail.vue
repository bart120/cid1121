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
            this.validate(newVal);
        }
    },
    emits:['statusChange'],
    methods:{
        validate(mail){
            if(mail != '' && ! regMail.test(mail)){
                this.valid = false;
                this.$emit('statusChange', "KO");
                return;
            }
            this.valid = true;
            this.$emit('statusChange', "OK");
        }
    }
}
</script>