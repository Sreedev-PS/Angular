import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform-component',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactiveform-component.html',
  styleUrl: './reactiveform-component.scss',
})
export class ReactiveformComponent {

  myform:FormGroup = new FormGroup({})

  constructor(
    private formB:FormBuilder
  ){

    this.myform = this.formB.group({
      name:['',Validators.required],
      password:['',Validators.required]
    })

  }

  formSubmit(){
    alert('Form is submitted')
  }
}
