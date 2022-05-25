import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Feature3AComponent } from './feature3-a/feature3-a.component';
import { Feature3BComponent } from './feature3-b/feature3-b.component';

export const routes: Routes = [
  { path: '', redirectTo: 'feature3-a', pathMatch: 'full' },
  {
    path: 'feature3-a',
    component: Feature3AComponent
  },
  {
    path: 'feature3-b',
    component: Feature3BComponent
  },
];

@NgModule({
  declarations: [
    Feature3AComponent,
    Feature3BComponent
  ],
  imports: [
    CommonModule,

    // Routes
    RouterModule.forChild(routes),
  ],
  providers: []
})
export class Feature3Module { }
