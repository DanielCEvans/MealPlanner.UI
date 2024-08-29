import { Component } from '@angular/core';
import { MealService } from '../meals/meal.service';

interface Meal {
  name: string,
  type: string
}

@Component({
  selector: 'app-select-meals',
  standalone: true,
  imports: [],
  templateUrl: './select-meals.component.html',
  styleUrl: './select-meals.component.css'
})
export class SelectMealsComponent {

  meals: Array<Meal> = [];

  constructor(mealService: MealService){
    mealService.getMeals().subscribe(response => {
      this.meals = response;
    })
  }

}
