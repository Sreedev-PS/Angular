import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamicformcomponent',
  imports: [ReactiveFormsModule,JsonPipe,FormsModule],
  templateUrl: './dynamicformcomponent.html',
  styleUrl: './dynamicformcomponent.scss',
})
export class Dynamicformcomponent {
  removedValue:unknown
  formArray = new FormArray([
    this.createFormGroup()
  ])

  constructor(
    private fb:FormBuilder
  ){}

  get formgroup(){
    return this.formArray.controls as FormGroup[]
  }

  addEvnet(){
    this.formArray.push(this.createFormGroup())
  }

  createFormGroup(){
    return new FormGroup({
      name:new FormControl(''),
      role:new FormControl('')
    })
  }

  removeForm(i:number){
    this.removedValue = this.formArray.at(i).value
    this.formArray.removeAt(i)
  }
  onSave(){
    console.log()
    alert('Submitted')
  }

}
