import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementListComponent } from './components/element-list/element-list.component';
import { ElementListItemComponent } from './components/element-list-item/element-list-item.component';
import { ElementComponent } from './components/element/element.component';



@NgModule({
  declarations: [
    ElementListComponent,
    ElementListItemComponent,
    ElementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ElementListComponent,
    ElementListItemComponent,
    ElementComponent
  ]
})
export class ElementsModule { }
