import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AttColor } from '../../directives/att-color';

@Component({
  selector: 'app-att-compo',
  imports: [
    FormsModule,
    AttColor
  ],
  templateUrl: './att-compo.html',
  styleUrl: './att-compo.scss',
})
export class AttCompo {
  colorValue:string=''
}
