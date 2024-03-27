import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1 class="text-center">{{ title }}</h1>
    <hr>
    <h2 class="text-center">Counter: {{ counter }}</h2>
    <div class="flex flex-row justify-items-center justify-center">
      <button class="px-2 bg-green-300" (click)="increaseBy(1)">+1</button>
      <button class="px-2 bg-yellow-300" (click)="reset()">Reset</button>
      <button class="px-2 bg-red-600" (click)="increaseBy(-1)">-1</button>
    </div>
  `,
})

export class CounterComponent {
  constructor() {  }

  public title: string = 'Counter - App';
  public counter: number = 0;

  increaseBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }

}