import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { NavComponent } from "./nav/nav.component";

interface Meal {
  name: string;
  type: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'meal-planner-ui';
  meals: Meal[] = [];
  backendUrl: string = 'http://localhost:5157/api/meals';

  constructor(private http: HttpClient) {
    this.getMeals().subscribe((response) => (this.meals = response));
  }

  getMeals(): Observable<Meal[]> {
    // return this.http.get<Meal[]>(this.backendUrl);
    const testMeals: Meal[] = [
      {
        "name": "Dans Pesto Pasta",
        "type": "Dinner"
      },
      {
        "name": "Chicken Alfredo",
        "type": "Lunch"
      },
      {
        "name": "Garlic Tomato Pasta",
        "type": "Dinner"
      }
    ];

    return of(testMeals);
  }

  getIngredients(){
    console.log('Getting Ingredients');
  }
}
