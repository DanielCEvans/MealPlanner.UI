import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'meal-planner-ui';

  constructor(private http: HttpClient){};

  ngOnInit(){
    const backendUrl = 'http://localhost:5157/api/meals';
    this.http.get(backendUrl).subscribe(response => {
      console.log(response);
    })
  }
}
