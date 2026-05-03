import { Component } from '@angular/core';
import { DerivedSignal } from "../../components/derived-signal/derived-signal";
import { signalService } from '../../services/signal_service';

@Component({
  selector: 'app-signal-dom-view',
  imports: [DerivedSignal],
  templateUrl: './signal-dom-view.html',
  styleUrl: './signal-dom-view.scss',
})
export class SignalDomView {

  constructor(
    public signalService:signalService
  ){}

  increment(){
    this.signalService.increment()
  }

}
