import {Component, OnInit} from '@angular/core';
import {Car} from "../car";
import {CarService} from "../car.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  car: Car;
  carList: Car[] = [];

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carList = this.carService.getCars();
  }

  deleteCar(car) {
    this.carList.forEach((value, index) => {
      if (value == car) {
        this.carList.splice(index, 1)
      }

    })
  }
}



