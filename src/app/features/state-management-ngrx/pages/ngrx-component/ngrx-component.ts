import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterSelector } from '../../../../shared/states/counter/counter-selector';
import { counterDecrement, counterIncrement } from '../../../../shared/states/counter/counter-action';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ngrx-component',
  imports: [AsyncPipe],
  templateUrl: './ngrx-component.html',
  styleUrl: './ngrx-component.scss',
})
export class NgrxComponent {

  constructor(private store: Store) { }

  get counterValue() {
    return this.store.select(counterSelector)
  }

  incrementCounter() {
    this.store.dispatch(counterIncrement())
  }

  decrementCounter() {
    this.store.dispatch(counterDecrement())
  } 
}
