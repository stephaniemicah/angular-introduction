import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title: string = '1.Introduction';
  myBtn: string = 'My Button';
  counter: number = 0;

  //attribute binding
  isDisabled: boolean = false;
  angularImage: string = '../assets/angular16.jpg';

  //property binding
  bgColor: string = 'red';
  titleColor: string = 'white';
  description: string = 'font-size: 30px; color: lightblue';

  //event binding
  incrementCounter() {
    this.counter++;
  }

  //class binding
  redText: boolean = true;

}
