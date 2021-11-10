import BrandService from '../services/BrandService';

import Dropdown from 'primevue/dropdown';

const bs = new BrandService();

export const brandsMixin = {
    components: {
        Dropdown
    },
    data() {
        return { brands: [] };
    },
    mounted() {
        bs.getBrands().then(data => this.brands = data);
    }
}