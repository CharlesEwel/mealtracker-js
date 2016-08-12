import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';


@Component({
  selector: 'create-new-meal',
  outputs: ['onAddNewMeal'],
  template: `
  <h3>Add Meal:</h3>
  <input placeholder="Name" class="col-sm-8 input-lg" #newName>
  <input placeholder="Details" class="col-sm-8 input-lg" #newDetails>
  <input type="number" placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
  <button (click)="addReview(newName, newDetails, newCalories)" class="add-button btn-lg">Add</button>
  `
})

export class CreateNewMealComponent {
  public onAddNewMeal: EventEmitter<string[]>;
  constructor() {
    this.onAddNewMeal = new EventEmitter();
  }
  addReview(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement) {
    if(userName.value === "" || userDetails.value === "" || userCalories.value === "") {
      alert("You didn't fill out all the form fields")
    } else {
      var emission = [];
      emission.push(userName.value);
      emission.push(userDetails.value);
      emission.push(userCalories.value);
      this.onAddNewMeal.emit(emission);
      userName.value = "";
      userDetails.value = "";
      userCalories.value = "";
    }
  }
}
