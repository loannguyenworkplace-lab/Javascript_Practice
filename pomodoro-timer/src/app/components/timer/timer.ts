import { Component, computed, numberAttribute, signal } from '@angular/core';
import { Pomodoro } from '../../services/pomodoro';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timer',
  imports: [FormsModule],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
})
export class Timer {
  workingTime: number;
  currentTime = signal(0);

  constructor(public settings: Pomodoro) {
    this.workingTime = this.settings.workTime * 60;
    this.currentTime.set(this.workingTime);
  }
  isRunning = false;
  startTing = 0;
  counter: number = 0;
  sessionType: string = "Work";

  startTime(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.startTing = setInterval(() => {
      if (this.currentTime() > 0) {
        this.currentTime.update(ct => ct - 1);
      }
      if (this.currentTime() === 0) {
        this.nextSession();
      }
    }, 1000)
  }

  minutes = computed(() => String(Math.floor(this.currentTime() / 60)).padStart(2, '0'));
  seconds = computed(() => String(Math.floor(this.currentTime() % 60)).padStart(2, '0'));

  nextSession(): void {
    this.pauseTime();

    if (this.sessionType === 'Work') {
      this.counter++;

      if (this.counter === 4) {
        this.startLongRest();
      } else {
        this.startShortRest();
      }
    } else if (this.sessionType === 'Long Break') {
      this.counter = 0;
      this.working();
    } else {
      this.working();
    }
  }

  pauseTime(): void {
    if (!this.isRunning) return;
    clearInterval(this.startTing);
    this.isRunning = false;
  }

  resumeTime(): void {
    this.startTime()
  }

  resetTime(): void {
    this.pauseTime();
    if(this.sessionType=="Work"){
      this.workingTime = this.settings.workTime * 60;
      this.currentTime.set(this.workingTime);
    } else if (this.sessionType === "Short Break") {
      this.workingTime = this.settings.shortBreakTime * 60;
      this.currentTime.set(this.workingTime);
    } else{
      this.workingTime = this.settings.longBreakTime * 60;
      this.currentTime.set(this.workingTime);
    }
  }

  startShortRest(): void {
    this.sessionType = "Short Break";
    this.workingTime = this.settings.shortBreakTime * 60;
    this.currentTime.set(this.workingTime);
    this.startTime();
  }

  startLongRest(): void {
    this.sessionType = "Long Break";
    this.workingTime = this.settings.longBreakTime * 60;
    this.currentTime.set(this.workingTime);
    this.startTime();
  }
  working() {
    this.sessionType = "Work";
    this.workingTime = this.settings.workTime * 60;
    this.currentTime.set(this.workingTime);
    this.startTime();
  }
  applySettings(): void {
    this.pauseTime();
    this.workingTime = this.settings.workTime * 60;
    this.sessionType = 'Work';
    this.currentTime.set(this.workingTime);
  }
}
