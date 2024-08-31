import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

interface Meal {
  name: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class MealService {
  backendUrl: string = 'http://localhost:5157/api/meals';

  private cachedMealsData: Meal[] = [];

  constructor(private http: HttpClient) {}

  getData(): Observable<Meal[]> {
    if(this.cachedMealsData.length > 0){
      // return the cached data if the array is not empty
      console.log('using cached data');
      return of(this.cachedMealsData);
    } else {
      return this.http.get<Meal[]>(this.backendUrl).pipe(
        tap((data) => {
          // this will return the original data fetched from the backend
          // and also store the data in the cache as a side effect
          console.log('fetching data from backend');
          this.cachedMealsData = data;
        })
      )
    }
  }

  clearCache(){
    this.cachedMealsData = [];
  }
}
