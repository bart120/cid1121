import axios from 'axios';

const URL = 'https://formation.inow.fr/demo/api/v1/cars';

export default class CarService {

    getCars() {
        return axios.get(URL).then(resp => {
            if (resp.data == null) {
                return Promise.reject('La ressource est introuvable.');
            }
            return Promise.resolve(resp.data);
        });
    }

    insertCar(car) {
        return axios.post(URL, car).then(resp => {
            return Promise.resolve(resp.data);
        });
    }

    updateCar(car) {
        return axios.put(`${URL}/${car.id}`, car).then(resp => {
            return Promise.resolve(resp.data);
        });
    }

    deleteCar(car) {
        return axios.delete(`${URL}/${car.id}`);
    }
}