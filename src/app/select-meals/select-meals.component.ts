import { Component, OnInit } from '@angular/core';
import { MealService } from '../services/meals/meal.service';

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
export class SelectMealsComponent implements OnInit {

  meals: Meal[] = [];

  constructor(private mealService:MealService){};

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.mealService.getData().subscribe(response => this.meals = response);
  }

}
