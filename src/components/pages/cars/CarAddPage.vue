<template>
    <h1>Ajouter une voiture</h1>
    <form novalidate>
        <div>
            <input-cid label="Modèle" type="text" v-model="car.model" />
        </div>
        <div>
            <input-cid label="Prix" type="number" v-model="car.price" />
        </div>
        <div>
            <label>Mise en circulation</label>
            <Calendar v-model="car.dateOfCirculation" />
        </div>
        <div>
            <Button type="submit">Enregistrer</Button>
        </div>
    </form>
</template>
<script setup>
    import Button from 'primevue/button';
    import InputCid from '../../core/input/InputCid.vue';
    import Calendar from 'primevue/calendar';
</script>
<script>
export default {
    components:{
        Button,
        InputCid,
        Calendar
    },
    data(){
        return {car:{}};
    }
}
</script>