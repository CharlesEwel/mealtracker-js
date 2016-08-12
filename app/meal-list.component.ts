import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { CreateNewMealComponent } from './create-new-meal.component';


@Component({
  selector: 'meal-list',
  inputs: ['meals'],
  directives: [MealComponent, CreateNewMealComponent],
  template: `
  <meal-display *ngFor="#currentMeal of meals"
    [meal]="currentMeal">
  </meal-display>
  <create-new-meal
    (onAddNewMeal)="createMeal($event[0], $event[1], $event[2])">
  </create-new-meal>
  `
})

export class MealListComponent {
  public meals: Meal[];
  constructor() {
  }
  createMeal(name: string, details: string, calories: string) {
    this.meals.push(
      new Meal(name, details, parseInt(calories), this.meals.length)
    )
  }
}
