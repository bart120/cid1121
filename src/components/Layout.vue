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
<style>
fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>