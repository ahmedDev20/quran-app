import { Component, OnInit } from '@angular/core';
import { time12Hour } from 'src/app/utils/time';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  currentTime: string = time12Hour().time;
  amPm: string = time12Hour().ampm;
  currentDate: Date = new Date();

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      // this.currentTime = time12Hour().time;
      // this.amPm = time12Hour().ampm;
      this.currentDate = new Date();
    }, 1000);
  }
}
