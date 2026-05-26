import { Component } from '@angular/core';
import { Child } from '../../components/child/child';

@Component({
  selector: 'app-content-project-depth',
  imports: [Child],
  templateUrl: './content-project-depth.html',
  styleUrl: './content-project-depth.scss',
})
export class ContentProjectDepth {

}
