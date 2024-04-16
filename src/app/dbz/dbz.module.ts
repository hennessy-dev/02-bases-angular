import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListDbzComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListDbzComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})

export class DbzModule { }
