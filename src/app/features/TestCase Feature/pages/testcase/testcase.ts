import { Component } from '@angular/core';

@Component({
  selector: 'app-testcase',
  imports: [],
  templateUrl: './testcase.html',
  styleUrl: './testcase.scss',
})
export class Testcase {

counter = 0


addCounter(){
  this.counter++
}

decreaseCounter(){
  this.counter--
}

}
