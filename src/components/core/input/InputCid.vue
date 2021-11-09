<template>
    <label>{{this.label}}</label>
    <InputText v-bind="this.$attrs" v-model="this.value" :style="stl"/>
     
</template>
<script setup>
import InputText from 'primevue/inputtext';
</script>
<script>
export default {
    components:{
        InputText
    },
    props:{
        label: String,
    },
    data(){
        return {value: ''};
    },
    computed:{
        stl(){
            //console.log('value de data change');
            return this.value =='' ? 'background-color:#aaaaaa' : '';
        } 
    },
    mounted(){
        //console.log("props: ", this.$props);
        //console.log("attr: ", this.$attrs);
    }
}
</script>