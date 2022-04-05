import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isNight: boolean = false;

  constructor() {}

  ngOnInit() {
    this.checkDayOrNight();
    setInterval(this.checkDayOrNight, 3600 * 1000);
  }

  checkDayOrNight() {
    const date = new Date();
    const hour = date.getHours();
    this.isNight = hour >= 20 || hour <= 4;
  }
}
