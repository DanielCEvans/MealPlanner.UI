import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export class Ingredient {
  constructor(
    public name?: string,
    public unit?: string,
    public amount?: number,
    public category?: string
  ) {}
}

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

  onSubmit(){
    this.submitted = true;
  }

}
