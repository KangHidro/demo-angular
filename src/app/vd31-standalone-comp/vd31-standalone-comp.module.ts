import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandaloneFormComponent } from '../standalone-form/standalone-form.component';
import { ListScComponent } from './list-sc/list-sc.component';

export const routes: Routes = [
  { path: '', component: ListScComponent },
];

@NgModule({
  declarations: [
    ListScComponent
  ],
  imports: [
    StandaloneFormComponent,
    // Routes
    RouterModule.forChild(routes),
  ],
  providers: []
})
export class Vd31StandaloneCompModule { }
