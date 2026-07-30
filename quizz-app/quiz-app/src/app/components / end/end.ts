import { Component } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end',
  imports: [CommonModule],
  templateUrl: './end.html',
  styleUrl: './end.css',
})
export class EndComponent {
  constructor(
    public quizService: QuizService,
    private router: Router,){}
  reStart(){
    this.quizService.score = 0;
    this.quizService.currentQuestionIndex = 0;
    this.quizService.results = [];
    this.router.navigate(['/']);
  }
}
