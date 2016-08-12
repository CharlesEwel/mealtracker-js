import { Component } from 'angular2/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <ul>
      <li>Name: {{ meal.name }} </li>
      <li>Details: {{ meal.details }} </li>
      <li>Calories: {{ meal.calories }} </li>
    </ul>
    <hr>
  `
})

export class MealComponent {
  public meal: Meal;
  constructor() {
  }
}
