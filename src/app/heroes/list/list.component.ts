import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  public heroNames: string[] = ['Iron Man', 'Spiderman', 'Thor', 'Hulk', 'HawkEye'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

}
