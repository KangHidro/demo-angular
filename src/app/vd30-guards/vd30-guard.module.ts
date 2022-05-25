import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Feature1Component } from './feature1/feature1.component';
import { DeactivateGuard } from './guards/deactivate.guard';
import { ActivateGuard } from './guards/activate.guard';
import { Feature2Component } from './feature2/feature2.component';
import { CanLoadGuard } from './guards/canload.guard';
import { ActivateChildGuard } from './guards/activate-child.guard';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivateChild: [ActivateChildGuard],
    children: [
      {
        path: 'child',
        component: DashboardDetailComponent
      }
    ]
  },
  {
    path: 'feature1',
    component: Feature1Component,
    canActivate: [ActivateGuard],
  },
  {
    path: 'feature2',
    component: Feature2Component,
    canDeactivate: [DeactivateGuard],
  },
  {
    path: 'feature3',
    loadChildren: () => import('./feature3/feature3.module').then(m => m.Feature3Module),
    canLoad: [CanLoadGuard]
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    Feature1Component,
    Feature2Component,
  ],
  imports: [
    CommonModule,

    // Routes
    RouterModule.forChild(routes),
  ],
  providers: [
    ActivateGuard,
    ActivateChildGuard,
    DeactivateGuard,
    CanLoadGuard,
  ]
})
export class Vd30GuardModule { }
