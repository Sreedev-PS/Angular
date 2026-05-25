import { Component } from '@angular/core';

@Component({
  selector: 'app-promis-component',
  imports: [],
  templateUrl: './promis-component.html',
  styleUrl: './promis-component.scss',
})
export class PromisComponent {
  islabel = true

  mypromise = new Promise((resolve, reject) => {
    if (this.islabel) {
      resolve("Promise resolved successfully");
    } else {
      reject("Promise rejected");
    }
  })


  mysecondpromise = Promise.resolve('').then((message) => message )

  constructor() {
    this.mypromise.then((message) => {
      console.log(message);
    }).catch((error: string) => {
      console.error(error);
    }).finally(() => {
      console.log("Promise is settled");
    });

    Promise.reject('').catch(()=> console.log(''));

  };

  
}
