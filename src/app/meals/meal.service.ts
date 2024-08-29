import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Meal {
  name: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class MealService {

  backendUrl: string = 'http://localhost:5157/api/meals';

  constructor(private http: HttpClient) {}

  getMeals(): Observable<Meal[]> {
    console.log('calling backend to get meals');
    return this.http.get<Meal[]>(this.backendUrl);
  }
}
