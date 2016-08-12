import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { CreateNewMealComponent } from './create-new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriePipe } from './calorie.pipe';


@Component({
  selector: 'meal-list',
  inputs: ['meals'],
  directives: [MealComponent, CreateNewMealComponent, EditMealComponent],
  pipes: [CaloriePipe],
  template: `
  <select (change)="onCalorieChange($event.target.value)" class="filter input-lg show-all">
    <option value="all" selected="selected">Show All Meals</option>
    <option value="high">Show High Calorie Meals</option>
    <option value="low">Show Low Calorie Meals</option>
  </select>
  <meal-display
    *ngFor="#currentMeal of meals | calories: filterCalories"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal===selectedMeal"
    [meal]="currentMeal">
  </meal-display>
  <edit-meal
    *ngIf="selectedMeal"
    [meal]="selectedMeal">
  </edit-meal>
  <create-new-meal
    (onAddNewMeal)="createMeal($event[0], $event[1], $event[2])">
  </create-new-meal>
  `
})

export class MealListComponent {
  public meals: Meal[];
  public selectedMeal: Meal;
  public filterCalories: string = "all"
  constructor() {
  }
  createMeal(name: string, details: string, calories: string) {
    this.meals.push(
      new Meal(name, details, parseInt(calories), this.meals.length)
    )
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
  }
  onCalorieChange(filterOption){
    this.filterCalories = filterOption;
  }
}
