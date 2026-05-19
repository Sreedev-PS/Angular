import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.scss',
})
export class ChildComponent {
  title = input<string>()
  age = input('',
   {
    transform:(value:number|string)=> 'this is the number type value = '+value
   } 
  )
  combine = computed(()=>{
    return this.title()+ ' ----- ' + this.age()
  })
  childMessage = output<string>()


  eventEmit(){
    this.childMessage.emit('Thanks For Checking the code base')
  }

}
