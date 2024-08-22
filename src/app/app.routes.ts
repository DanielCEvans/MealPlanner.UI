import { Routes } from '@angular/router';
import { SelectMealsComponent } from './select-meals/select-meals.component';
import { FrigeComponent } from './frige/frige.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';

export const routes: Routes = [
  { path: 'select-meals', component: SelectMealsComponent },
  { path: 'your-fridge', component: FrigeComponent },
  { path: 'add-meal', component: AddMealComponent },
  { path: 'add-ingredient', component: AddIngredientComponent },
];
