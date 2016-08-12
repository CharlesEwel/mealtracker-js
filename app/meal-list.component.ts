import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';


@Component({
  selector: 'meal-list',
  inputs: ['meals'],
  directives: [MealComponent],
  template: `
  <meal-display *ngFor="#currentMeal of meals"
    [meal]="currentMeal">
  </meal-display>
  `
})

export class MealListComponent {
  public meals: Meal[];
  constructor() {
  }
}
