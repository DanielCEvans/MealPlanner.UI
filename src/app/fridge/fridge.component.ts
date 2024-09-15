import { Component, OnInit } from '@angular/core';
import { IngredientsService, Ingredient } from '../services/ingredients.service';

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
