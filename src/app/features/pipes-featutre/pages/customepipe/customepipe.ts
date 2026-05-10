import { Component } from '@angular/core';
import { CustomPipe } from '../../pipes/pipes_file';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customepipe',
  imports: [CustomPipe,FormsModule,CommonModule],
  templateUrl: './customepipe.html',
  styleUrl: './customepipe.scss',
})
export class Customepipe {
  name:string = '';

}
