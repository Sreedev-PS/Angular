import { Component } from '@angular/core';
import { ChildComponent } from '../../components/child-component/child-component';

@Component({
  selector: 'app-content-project',
  imports: [ChildComponent],
  templateUrl: './content-project.html',
  styleUrl: './content-project.scss',
})
export class ContentProject {

}
