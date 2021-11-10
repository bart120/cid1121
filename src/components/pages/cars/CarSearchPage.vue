<template>
    <h1>Rechercher une voiture</h1>
    <form>
       <div>
            <label>Marque</label>
            <Dropdown v-model="selectedID" :options="brands" optionLabel="name" optionValue="id" />
        </div>
        <div>
            <Button type="submit">Rechercher</Button>
        </div>
    </form>
</template>
<script setup>
    import Button from 'primevue/button';
    //import Dropdown from 'primevue/dropdown';
    //import BrandService from '../../../services/BrandService';
    import {brandsMixin} from '../../../mixins/BrandsMixin';
</script>
<script>
//const bs = new BrandService();
export default {
    components:{
        Button,
        //Dropdown
    },
    data(){
        return {selectedID:0};
    },
    mixins:[
        brandsMixin
    ],
    mounted(){
        //bs.getBrands().then(data => this.brands = data);
    }
}
</script>