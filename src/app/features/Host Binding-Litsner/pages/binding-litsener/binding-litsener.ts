import { Component, HostBinding, HostListener, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-litsener',
  imports: [FormsModule],
  templateUrl: './binding-litsener.html',
  styleUrl: './binding-litsener.scss',
  host:{
    '[style.color]':'colorText',
    '(click)':'onhoverHeighlight()'
  }
})
export class BindingLitsener {

  color:string = 'red'
  colorText = ''

  @HostBinding('style.backgroundColor') get setColor(){
    return this.color
  }

  @HostListener('mouseenter') onHoverBackground(){

   alert('hovered on first div')

  }

  onhoverHeighlight(){
    this.color = 'yellow',
    this.colorText = 'violet'
  }
  

}
