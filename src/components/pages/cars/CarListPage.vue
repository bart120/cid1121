<template>
    <h1>Lister les voitures</h1>
    <table>
        <thead>
            <tr><th>Modèle</th><th>Prix</th><th>Mise en circ.</th></tr>
        </thead>
        <tbody>
            <tr v-for="voiture in cars" :key="voiture.id">
                <td>{{voiture.model}}</td>
                <td>{{voiture.price}} €</td>
                <td>{{formatDate(voiture.dateOfCirculation)}}</td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
import CarService from '../../../services/CarService';
import moment from 'moment';
</script>
<script>
const carService = new CarService();
export default {
    data(){
        return {cars:[]};
    },
    methods:{
        formatDate(date){
            return moment(date).format("DD/MM/yyyy");
        }
    },
    mounted(){
        
        carService.getCars().then(data =>{
            this.cars = data;
            //console.log(moment(this.cars[0].dateOfCirculation).format("DD/MM/yyyy"));
        }).catch(err => alert(err.message));
        console.log('fin getcars');
    }
}
</script>