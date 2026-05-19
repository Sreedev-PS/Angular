import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  imports: [FormsModule],
  templateUrl: './child-component.html',
  styleUrl: './child-component.scss',
})
export class ChildComponent {

  childData = model('')

  sendValue(){
    this.childData.set('This is the communication method by using signal-model(). Thanks for looking the code base')
  }
}
