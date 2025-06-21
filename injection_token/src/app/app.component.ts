import { Component, Inject } from '@angular/core';
import { DataToken } from './tokenfolder/tokenFile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'injection_token';
  constructor(@Inject(DataToken) public data:any){}
}
