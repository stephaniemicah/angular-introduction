import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent  {
  userForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ],
      ],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
      }),
      phoneNumbers: this.formBuilder.array([
        this.formBuilder.control('', [
          Validators.required,
          Validators.pattern(/^\d{10}$/),
        ])
      ])
    });
  }

  get phoneNumbers() {
    return this.userForm.get('phoneNumbers') as FormArray;
  }

  addPhoneNumber(){
    this.phoneNumbers.push(
      this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/)
      ])
    )
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

}
