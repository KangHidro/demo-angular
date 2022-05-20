import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vd02StringInterpolationComponent } from './vd02-string-interpolation/vd02-string-interpolation.component';
import { Vd04BindingComponent } from './vd04-binding/vd04-binding.component';
import { Vd05BuiltInDirectivesComponent } from './vd05-built-in-directives/vd05-built-in-directives.component';

const routes: Routes = [
  { path: '', redirectTo: 'vd02', pathMatch: 'full' },
  { path: 'vd02', component: Vd02StringInterpolationComponent },
  { path: 'vd04', component: Vd04BindingComponent },
  { path: 'vd05', component: Vd05BuiltInDirectivesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
