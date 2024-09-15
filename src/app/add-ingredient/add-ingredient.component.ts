import { Component } from '@angular/core';

export class Ingredient {
  constructor(
    public name: string,
    public unit: string,
    public amount: number,
    public category: string
  ) {}
}

@Component({
  selector: 'app-add-ingredient',
  standalone: true,
  imports: [],
  templateUrl: './add-ingredient.component.html',
  styleUrl: './add-ingredient.component.css'
})
export class AddIngredientComponent {
  units = ['ml', 'gm', 'kg', 'L', 'tsp', 'tbs']
  category = ['herbs', 'meat', 'seafood', 'fruit & veg', 'spices']
  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

}
