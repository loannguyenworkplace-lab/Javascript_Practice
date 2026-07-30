import { Routes } from '@angular/router';
import { StartScreen } from './components/start-screen/start-screen';
import { Question } from './ components / question/question';
import { EndComponent } from './components / end/end';

export const routes: Routes = [
  {
    path: '',
    component: StartScreen
  },
  {
    path: 'question',
    component: Question
  },
  {
    path: 'end',
    component: EndComponent
  }
];
