import { Component, computed, input } from '@angular/core';

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

}
