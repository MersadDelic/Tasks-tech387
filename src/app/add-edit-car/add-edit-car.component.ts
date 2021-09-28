import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Car} from "../car";
import {CarService} from "../car.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-edit-car',
  templateUrl: './add-edit-car.component.html',
  styleUrls: ['./add-edit-car.component.css']
})
export class AddEditCarComponent implements OnInit {

  formGroup: FormGroup;
  add: boolean;
  id: number;
  car: Car = new Car();

  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) {
    this.formGroup = new FormGroup({
      brand: new FormControl(null),
      model: new FormControl(null),
      year: new FormControl(null),
      color: new FormControl(null),
      power: new FormControl(null),
    })
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.add = !this.id;

    if (!this.add) {
      let foundCar = this.carService.getCar(this.id);

      this.formGroup.controls.brand.setValue(foundCar.brand);
      this.formGroup.controls.model.setValue(foundCar.model);
      this.formGroup.controls.color.setValue(foundCar.color);
      this.formGroup.controls.year.setValue(foundCar.year);
      this.formGroup.controls.power.setValue(foundCar.power);

    }
  }

  onSubmit() {
    const car = {
      brand: this.formGroup.value.brand,
      model: this.formGroup.value.model,
      year: this.formGroup.value.year,
      color: this.formGroup.value.color,
      power: this.formGroup.value.power,
    }

    if (this.add) {
      this.carService.addCar(car);
      this.router.navigateByUrl('/');
    } else {
      this.carService.updateCar(this.id, car);
      this.router.navigateByUrl('/');

    }

  }
}
