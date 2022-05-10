import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = false;
  isVisible = false;

  constructor() {}

  image = '../assets/timepaylogo.png';
  cover = '../assets/dockercom.png';
  vector2='../assets/vector2.png'
  vector3='../assets/vector3.png'

  vector4='../assets/vector4.png'

  vector5='../assets/vector5.png'
  vector='../assets/vector.png'

  today = new Date();
  date = this.today.getDate() + '  ' + this.today.getFullYear();

  weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  day = this.weekday[this.today.getDay()];

  // day2 = this.monthNames[this.today.getMonth()]+' '+(this.today.getDate()+1);
  day2 = this.weekday[this.today.getDay() + 1];

  day3 = this.weekday[this.today.getDay() + 2];

  month = this.monthNames[this.today.getMonth()];




  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
