<template>
    <h1>Ajouter une voiture</h1>
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
    import Button from 'primevue/button';
    import InputCid from '../../core/input/InputCid.vue';
    import Calendar from 'primevue/calendar';
    import Dropdown from 'primevue/dropdown';
    import BrandService from '../../../services/BrandService';
    import CarService from '../../../services/CarService';
</script>
<script>
const bs = new BrandService();
const cs = new CarService();
export default {
    components:{
        Button,
        InputCid,
        Calendar,
        Dropdown
    },
    data(){
        return {car:{}, brands: []};
    },
    methods:{
        submit(){
            console.log(this.car);
            cs.insertCar(this.car).then(data => 
                alert(`La voiture a été enregistrée avec l'ID ${data.id}`));
        }
    },
    mounted(){
        bs.getBrands().then(data => this.brands = data);
    }
}
</script>