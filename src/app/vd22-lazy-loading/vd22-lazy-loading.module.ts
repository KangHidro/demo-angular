import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Feature1Component } from './feature1/feature1.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'feature1', component: Feature1Component },
];

@NgModule({
  declarations: [
    DashboardComponent,
    Feature1Component
  ],
  imports: [
    CommonModule,

    // Routes
    RouterModule.forChild(routes),
  ]
})
export class Vd22LazyLoadingModule { }
