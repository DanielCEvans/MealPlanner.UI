import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

export class Ingredient {
  name?: string;
  unit?: string;
  amount?: number;
  category?: string;

  constructor(){}
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

  addIngredient(ingredient: Ingredient): Observable<number> {
   return this.http.post<number>(this.backendUrl, ingredient);
  }

  clearCache() {
    this.cachedIngredients = [];
  }
}
