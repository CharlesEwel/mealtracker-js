import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';


@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <h3>Edit Meal:</h3>
    <label> Edit Name:</label>
    <input [(ngModel)]="meal.name" class="col-sm-8 form-control input-lg"><br>
    <label> Edit Details:</label>
    <input [(ngModel)]="meal.details" class="col-sm-8 form-control input-lg"><br>
    <label> Edit Calories:</label>
    <input type="number" [(ngModel)]="meal.calories" class="col-sm-8 form-control input-lg"><br>
  `
})

export class EditMealComponent {
  public meal: Meal;
}
