import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-select-meals',
  standalone: true,
  imports: [],
  templateUrl: './select-meals.component.html',
  styleUrl: './select-meals.component.css'
})
export class SelectMealsComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private recipeService:RecipeService){};

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.recipeService.getData().subscribe(response => this.recipes = response);
  }

}
