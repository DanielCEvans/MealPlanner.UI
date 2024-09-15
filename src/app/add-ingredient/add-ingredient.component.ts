import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngredientsService, Ingredient } from '../services/ingredients.service';

@Component({
  selector: 'app-add-ingredient',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-ingredient.component.html',
  styleUrl: './add-ingredient.component.css'
})
export class AddIngredientComponent {
  ingredient: Ingredient = new Ingredient();
  // TODO: remove empty string, is there a better way??
  units = ['', 'ml', 'gm', 'kg', 'L', 'tsp', 'tbs']
  categories = ['', 'herbs', 'meat', 'seafood', 'fruit & veg', 'spices']
  submitted = false;

  constructor(private IngredientsService: IngredientsService) {
  }

  onSubmit(){
    this.submitted = true;
  }

  addIngredient(){
    // TODO: fix this design
    if(this.ingredient){
      this.IngredientsService.addIngredient(this.ingredient).subscribe(response => console.log(response));
    }
  }

}
