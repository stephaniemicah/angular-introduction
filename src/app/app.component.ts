import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title: string = 'Structural Directives';
  isLoggedIn: boolean = false;
  username: string = 'Stephanie Micah';

  //loops
  names: string[] = ['steph', 'micah', 'ali'];

  //switch
  grade: string = 'B';
}
