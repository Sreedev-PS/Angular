import { Component } from '@angular/core';
import {  } from '@angular/cdk';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual-scroll',
  imports: [ScrollingModule],
  templateUrl: './virtual-scroll.html',
  styleUrl: './virtual-scroll.scss',
})
export class VirtualScroll {

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

}
