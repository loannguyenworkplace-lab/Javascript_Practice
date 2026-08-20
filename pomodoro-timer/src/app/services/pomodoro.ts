import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Pomodoro {
  workTime = 25;
  shortBreakTime = 5;
  longBreakTime = 10;
  sessionType = "Work";
}
