import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{ greeting }}</h1>
    </div>
  `,
  standalone: true,
  imports: []
})
export class AppComponent implements OnInit {
  greeting: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getGreeting().subscribe(
      (response: string) => {
        this.greeting = response;
      },
      (error) => {
        console.error('Error fetching greeting:', error);
      }
    );
  }
}
