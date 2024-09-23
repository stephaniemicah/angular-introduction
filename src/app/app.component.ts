import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent  {
  user: { name: string; email: string } = {
    name: '',
    email: '',
  };

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value, this.user);
    }
  }

}
