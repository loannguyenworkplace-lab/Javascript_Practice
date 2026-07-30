import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.html',
  styleUrl: './start-screen.css',
})
export class StartScreen {
  constructor(
    private router: Router,
  ){}
  startQuiz() {
    this.router.navigate(['/question']);
  }
}
