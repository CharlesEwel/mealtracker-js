import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { CreateNewMealComponent } from './create-new-meal.component';
import { EditMealComponent } from './edit-meal.component';


@Component({
  selector: 'meal-list',
  inputs: ['meals'],
  directives: [MealComponent, CreateNewMealComponent, EditMealComponent],
  template: `
  <meal-display
    *ngFor="#currentMeal of meals"
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
}
