import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../services/ingredients.service';

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
export class FrigeComponent implements OnInit {

  public ingredients: Ingredient[] = [];

  constructor(private IngredientsService: IngredientsService){
  }

  ngOnInit(): void {
    this.IngredientsService.getIngredients().subscribe((response) => {
      this.ingredients = response});
  }

}
