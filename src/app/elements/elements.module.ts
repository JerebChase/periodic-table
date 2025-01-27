import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodicTableComponent } from './components/periodic-table/periodic-table.component';
import { ElementComponent } from './components/element/element.component';
import { ElementDetailComponent } from './components/element-detail/element-detail.component';



@NgModule({
  declarations: [
    PeriodicTableComponent,
    ElementComponent,
    ElementDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PeriodicTableComponent,
    ElementComponent,
    ElementDetailComponent
  ]
})
export class ElementsModule { }
