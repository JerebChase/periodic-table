import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementDetailComponent } from './elements/components/element-detail/element-detail.component';
import { PeriodicTableComponent } from './elements/components/periodic-table/periodic-table.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/elements', pathMatch: 'full' },
  { path: 'elements', component: PeriodicTableComponent },
  { path: 'elements/:id', component: ElementDetailComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
