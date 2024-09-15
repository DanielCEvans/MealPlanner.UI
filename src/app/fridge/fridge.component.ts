import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Ingredient {
  ingredientName: string,
  measurementUnit: string,
  ingredientAmount: number,
  ingredientCategory: string,
  mealIngredients?: string
}

@Component({
  selector: 'app-fridge',
  standalone: true,
  imports: [],
  templateUrl: './fridge.component.html',
  styleUrl: './fridge.component.css'
})
export class FrigeComponent {

  constructor(httpClient: HttpClient){
  }

}
