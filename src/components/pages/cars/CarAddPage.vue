<template>
    <h1> {{ $t('cars.title_add') }} </h1>
    <form novalidate @submit.prevent="submit">
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
            <label>Marque</label>
            <Dropdown v-model="car.brandID" :options="brands" optionLabel="name" optionValue="id" />
        </div>
        <div>
            <Button type="submit">Enregistrer</Button>
        </div>
    </form>
</template>
<script setup>
    
    import InputCid from '../../core/input/InputCid.vue';
    import Calendar from 'primevue/calendar';
    import Button from 'primevue/button';
    import CarService from '../../../services/CarService';
    import {brandsMixin} from '../../../mixins/BrandsMixin';
</script>
<script>
const cs = new CarService();
export default {
    components:{
        Button,
        InputCid,
        Calendar
    },
    data(){
        return {car:{}};
    },
    methods:{
        submit(){
            console.log(this.car);
            cs.insertCar(this.car).then(data => 
                alert(`La voiture a été enregistrée avec l'ID ${data.id}`));
        }
    },
    mixins:[
        brandsMixin
    ],
    mounted(){
        console.log('caradd mounted');
    }
}
</script>