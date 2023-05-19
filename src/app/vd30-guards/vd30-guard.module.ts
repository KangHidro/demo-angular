import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFeatureComponent } from './admin-feature/admin-feature.component';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Feature1Component } from './feature1/feature1.component';
import { Feature2Component } from './feature2/feature2.component';
import { canActiveChildGuard } from './guards/activate-child.guard';
import { canActiveGuard } from './guards/activate.guard';
import { canMatchGuard } from './guards/can-match.guard';
import { canDeactivateGuard } from './guards/deactivate.guard';
import { UserFeatureComponent } from './user-feature/user-feature.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivateChild: [canActiveChildGuard],
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
    canActivate: [canActiveGuard],
  },
  {
    path: 'feature2',
    component: Feature2Component,
    canDeactivate: [canDeactivateGuard],
  },
  {
    path: 'canmatch',
    component: AdminFeatureComponent,
    canMatch: [canMatchGuard],
    data: {
      role: 'admin'
    }
  },
  {
    path: 'canmatch',
    component: UserFeatureComponent,
    canMatch: [canMatchGuard],
    data: {
      role: 'user'
    }
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    Feature1Component,
    Feature2Component,
    AdminFeatureComponent,
    UserFeatureComponent,
  ],
  imports: [
    CommonModule,

    // Routes
    RouterModule.forChild(routes),
  ],
})
export class Vd30GuardModule { }
