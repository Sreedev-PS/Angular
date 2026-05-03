import { Component, computed } from '@angular/core';
import { signalService } from '../../services/signal_service';

@Component({
  selector: 'app-derived-signal',
  imports: [],
  templateUrl: './derived-signal.html',
  styleUrl: './derived-signal.scss',
})
export class DerivedSignal {
  derivedS123 = computed(()=>this.signalService.count()+1)
  constructor(
    private signalService:signalService
  ){}

  

}
