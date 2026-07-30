import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { QuizService } from '../../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  imports: [CommonModule],
  templateUrl: './question.html',
  styleUrl: './question.css',
})
export class Question {
  questions: any[] = [];

  constructor(
    private http: HttpClient,
    public quizService: QuizService,
    private router: Router
  ) {}
  ngOnInit() {
    this.http.get<any[]>('question.json').subscribe(data => {
      this.quizService.questions = data;
      console.log(this.quizService.questions)
    })
  }

  selectedAnswer: number | null = null;
  isAnswerd: boolean = false;
  score = 0;
  chooseAnswer(index: number) {
    if (this.isAnswerd) {
      return;
    }
    this.selectedAnswer = index;
    this.isAnswerd = true;
    if (index === this.quizService.questions[this.quizService.currentQuestionIndex].answer) {
      this.quizService.score++;
    }

    this.quizService.results.push({
      question: this.quizService.questions[this.quizService.currentQuestionIndex].id,
      userAnswer: this.quizService.questions[this.quizService.currentQuestionIndex].options[index],
      correctAnswer: this.quizService.questions[this.quizService.currentQuestionIndex].options[this.quizService.questions[this.quizService.currentQuestionIndex].answer],
      isCorrect: index === this.quizService.questions[this.quizService.currentQuestionIndex].answer
    })
  }

  nextQuestion() {
    if (this.quizService.currentQuestionIndex < this.quizService.questions.length - 1) {
      this.quizService.currentQuestionIndex++;
      this.selectedAnswer = null;
      this.isAnswerd = false;
    } else {
      this.router.navigate(['/end']);
    }
  }
}
