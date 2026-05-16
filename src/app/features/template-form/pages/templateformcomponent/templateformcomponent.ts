import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templateformcomponent',
  imports: [FormsModule,JsonPipe],
  templateUrl: './templateformcomponent.html',
  styleUrl: './templateformcomponent.scss',
})
export class Templateformcomponent {
  name: string = ''
  password: string = ''
  isSubmitted: boolean = false

  submitForm(form: unknown) {
    this.isSubmitted = true
  }
}
