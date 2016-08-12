import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredCalorieThreshold = args[0];
    if(desiredCalorieThreshold === "high") {
      return input.filter((meal) => {
        return (meal.calories >= 500);
      });
    } else if (desiredCalorieThreshold === "low") {
      return input.filter((meal) => {
        return (meal.calories <= 500);
      });
    } else {
      return input;
    }
  }
}
