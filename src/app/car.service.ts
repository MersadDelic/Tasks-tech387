import {Injectable} from '@angular/core';
import {Car} from "./car";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Car[] = [
    {id: 1, brand: 'Audi', model: 'A4', color: 'black', year: 2010, power: 81},
    {id: 2, brand: 'Golf', model: 'Plus', color: 'wrey', year: 2008, power: 77},
    {id: 3, brand: 'Ford', model: 'Kuga', color: 'white', year: 2015, power: 84},
  ]

  constructor() {
  }

  getCars() {
    return this.cars;
  }

  addCar(car: Car) {

    const newCar = {
      ...car,
      id: this.cars.length + 1,
    } as Car;

    this.cars.push(newCar);
    return this.cars;

  }

  getCar(id: any): Car {
    return this.cars.find(car => car.id === id);
  }

  updateCar(id: any, car: Car) {
    const foundCar = this.cars.find(c => c.id === id);

    foundCar.brand = car.brand;
    foundCar.model = car.model;
    foundCar.color = car.color;
    foundCar.year = car.year;
    foundCar.power = car.power;

  }

}

