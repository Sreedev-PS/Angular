import { Component, input, output, signal, viewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-attaching-component',
  imports: [],
  templateUrl: './attaching-component.html',
  styleUrl: './attaching-component.scss',
})
export class AttachingComponent {

  title = input<string>()
  greeting = output<string>()

  onClick(){
    this.greeting.emit('Hello from Attaching Component');
  }
}
