import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter: number = 0;
  counterRef: NodeJS.Timer;
  @Output() incrementNumber = new EventEmitter<{counter: number}>();

  startIncrement() {
    this.counterRef = setInterval(() => {
      this.counter += 1;
      this.incrementNumber.emit({counter: this.counter});
    }, 1000);
  }

  stopIncrement() {
    clearInterval(this.counterRef);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
