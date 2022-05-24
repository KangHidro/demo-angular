import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vd02StringInterpolationComponent } from './vd02-string-interpolation/vd02-string-interpolation.component';
import { Vd04BindingComponent } from './vd04-binding/vd04-binding.component';
import { Vd05BuiltInDirectivesComponent } from './vd05-built-in-directives/vd05-built-in-directives.component';
import { Vd06CustomDirectivesComponent } from './vd06-custom-directives/vd06-custom-directives.component';
import { Vd07InputOutputComponent } from './vd07-input-output/vd07-input-output.component';
import { Vd08InteractionCompComponent } from './vd08-interaction-comp/vd08-interaction-comp.component';
import { Vd09TemplateRefVarComponent } from './vd09-template-ref-var/vd09-template-ref-var.component';
import { Vd10ViewchildViewchildrenComponent } from './vd10-viewchild-viewchildren/vd10-viewchild-viewchildren.component';
import { Vd11ContentProjectionComponent } from './vd11-content-projection/vd11-content-projection.component';
import { Vd12BuiltInPipesComponent } from './vd12-built-in-pipes/vd12-built-in-pipes.component';
import { Vd13CustomPipesComponent } from './vd13-custom-pipes/vd13-custom-pipes.component';
import { Vd15HttpClientComponent } from './vd15-http-client/vd15-http-client.component';
import { Vd16HandleHttpErrorComponent } from './vd16-handle-http-error/vd16-handle-http-error.component';

const routes: Routes = [
  { path: '', redirectTo: 'vd02', pathMatch: 'full' },
  { path: 'vd02', component: Vd02StringInterpolationComponent },
  { path: 'vd04', component: Vd04BindingComponent },
  { path: 'vd05', component: Vd05BuiltInDirectivesComponent },
  { path: 'vd06', component: Vd06CustomDirectivesComponent },
  { path: 'vd07', component: Vd07InputOutputComponent },
  { path: 'vd08', component: Vd08InteractionCompComponent },
  { path: 'vd09', component: Vd09TemplateRefVarComponent },
  { path: 'vd10', component: Vd10ViewchildViewchildrenComponent },
  { path: 'vd11', component: Vd11ContentProjectionComponent },
  { path: 'vd12', component: Vd12BuiltInPipesComponent },
  { path: 'vd13', component: Vd13CustomPipesComponent },
  { path: 'vd15', component: Vd15HttpClientComponent },
  { path: 'vd16', component: Vd16HandleHttpErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
