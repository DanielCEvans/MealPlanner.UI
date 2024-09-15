import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

interface Ingredient {
  ingredientName: string,
  measurementUnit: string,
  ingredientAmount: number,
  ingredientCategory: string,
  mealIngredients: any
}

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  backendUrl: string = 'http://localhost:8088/api/ingredients';

  private cachedIngredients: Ingredient[] = [];

  constructor(private http: HttpClient) {}

  getIngredients(): Observable<Ingredient[]> {
    if(this.cachedIngredients.length > 0){
      return of(this.cachedIngredients)
    } else {
      return this.http.get<Ingredient[]>(this.backendUrl).pipe(
        tap((data) => {
          this.cachedIngredients = data;
        })
      )
    }
  }

  clearCache() {
    this.cachedIngredients = [];
  }
}
