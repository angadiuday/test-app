import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.action';

@Component({
  selector: 'app-counter-buttons',
  standalone: true,
  imports: [],
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.scss'
})
export class CounterButtonsComponent implements OnInit{

OnReset() {
  this.store.dispatch(reset());
  // this.reset.emit();
// throw new Error('Method not implemented.');
}
onDecrement() {
  this.store.dispatch(decrement());
  // this.decrement.emit()
// throw new Error('Method not implemented.');
}
onIncrement() {
  this.store.dispatch(increment()); 
  // this.increment.emit()
// throw new Error('Method not implemented.');
}


  constructor(private store: Store<{counter:number}>){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
