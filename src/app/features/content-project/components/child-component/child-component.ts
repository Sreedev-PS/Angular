import { Component } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-child-component',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './child-component.html',
  styleUrl: './child-component.scss',
})
export class ChildComponent {

}
