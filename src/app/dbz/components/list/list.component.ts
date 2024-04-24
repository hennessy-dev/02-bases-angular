import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ListDbzComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 2000
    },
    {
      name: 'Goku',
      power: 10000
    },
    {
      name: 'Brolly',
      power: 3200
    }
  ];

}
