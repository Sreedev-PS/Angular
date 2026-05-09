import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HLbAttDirective } from '../../directives/att-hlb';

@Component({
  selector: 'app-h-lb-att-directive',
  imports: [FormsModule,HLbAttDirective],
  templateUrl: './h-lb-att-directive.html',
  styleUrl: './h-lb-att-directive.scss',
})
export class HLbAttDirectives {

  colbg:string = '';
}
