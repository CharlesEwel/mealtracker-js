import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';


@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <meal-list [meals]=meals>
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Breakfast", "Cereal and Milk", 300, 0),
      new Meal("Lunch", "Braised Beef Sandwich", 550, 1),
      new Meal("Dinner", "Hamburger and Fries", 800, 2),
      new Meal("Dessert", "Marionberry Milkshake", 400, 3)
    ]
  }
}
