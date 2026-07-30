import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  score = 0;
  currentQuestionIndex = 0;
  questions: any[] =[];
  results: any[] = [];
}
