import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

export interface Meal {
  name: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class MealService {
  // backendUrl: string = 'http://localhost:5157/api/meals';
  backendUrl: string = 'http://localhost:8088/api/meals';

  private cachedMealsData: Meal[] = [];

  constructor(private http: HttpClient) {}

  getData(): Observable<Meal[]> {
    if(this.cachedMealsData.length > 0){
      // return the cached data if the array is not empty
      return of(this.cachedMealsData);
    } else {
      return this.http.get<Meal[]>(this.backendUrl).pipe(
        tap((data) => {
          // this will return the original data fetched from the backend
          // and also store the data in the cache as a side effect
          this.cachedMealsData = data;
        })
      )
    }
  }

  clearCache(){
    this.cachedMealsData = [];
  }
}
