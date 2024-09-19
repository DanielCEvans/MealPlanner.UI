import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

export interface Recipe {
  id: number
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  backendUrl: string = 'http://localhost:5157/api/recipes';
  // backendUrl: string = 'http://localhost:8088/api/recipes';

  private cachedRecipes: Recipe[] = [];

  constructor(private http: HttpClient) {}

  getData(): Observable<Recipe[]> {
    if(this.cachedRecipes.length > 0){
      // return the cached data if the array is not empty
      return of(this.cachedRecipes);
    } else {
      return this.http.get<Recipe[]>(this.backendUrl).pipe(
        tap((data) => {
          // this will return the original data fetched from the backend
          // and also store the data in the cache as a side effect
          this.cachedRecipes = data;
        })
      )
    }
  }

  clearCache(){
    this.cachedRecipes = [];
  }
}
