import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

export interface UserIngredient {
  id: number;
  name: string;
  unit: string;
  categoryName: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  // backendUrl: string = 'http://localhost:8088/api/ingredients';
  backendUrl: string = 'http://localhost:5157/api/ingredients/user?userId=1';

  private cachedIngredients: UserIngredient[] = [];

  constructor(private http: HttpClient) {}

  getIngredients(): Observable<UserIngredient[]> {
    if(this.cachedIngredients.length > 0){
      return of(this.cachedIngredients)
    } else {
      return this.http.get<UserIngredient[]>(this.backendUrl).pipe(
        tap((data) => {
          this.cachedIngredients = data;
        })
      )
    }
  }

  // addIngredient(ingredient: Ingredient): Observable<number> {
  //  return this.http.post<number>(this.backendUrl, ingredient);
  // }

  clearCache() {
    this.cachedIngredients = [];
  }
}
