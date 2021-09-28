import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CarListComponent} from './car-list/car-list.component';
import {AddEditCarComponent} from './add-edit-car/add-edit-car.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: CarListComponent},
  {path: 'add', component: AddEditCarComponent},
  {path: 'edit/:id', component: AddEditCarComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    AddEditCarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
