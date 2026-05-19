import { Component, signal } from '@angular/core';
import { ChildComponent } from '../../components/child-component/child-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-model',
  imports: [ChildComponent,FormsModule],
  templateUrl: './signal-model.html',
  styleUrl: './signal-model.scss',
})
export class SignalModel {

  childValue = signal('')
}
