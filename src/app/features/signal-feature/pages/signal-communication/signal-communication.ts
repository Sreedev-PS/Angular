import { Component } from '@angular/core';
import { ChildComponent } from '../../components/child-component/child-component';

@Component({
  selector: 'app-signal-communication',
  imports: [ChildComponent],
  templateUrl: './signal-communication.html',
  styleUrl: './signal-communication.scss',
})
export class SignalCommunication {

}
