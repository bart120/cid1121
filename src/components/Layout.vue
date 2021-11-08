<template>
    <Nav></Nav>
    <router-view></router-view> 
</template>

<script setup>
    import Nav from './core/Nav.vue';
</script>
<script>
export default {
    components:{
        Nav
    }
}
</script>