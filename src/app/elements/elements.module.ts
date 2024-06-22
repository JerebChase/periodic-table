import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementListComponent } from './element-list/element-list.component';
import { ElementListItemComponent } from './element-list-item/element-list-item.component';
import { ElementComponent } from './element/element.component';



@NgModule({
  declarations: [
    ElementListComponent,
    ElementListItemComponent,
    ElementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ElementsModule { }
