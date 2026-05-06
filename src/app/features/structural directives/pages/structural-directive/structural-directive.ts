import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StructuralDirectiveD } from './../../directive/structural_directive';

@Component({
  selector: 'app-structural-directive',
  imports: [FormsModule,StructuralDirectiveD],
  templateUrl: './structural-directive.html',
  styleUrl: './structural-directive.scss',
})
export class StructuralDirective {
isTest:boolean=false
inputValue:string=''

}
