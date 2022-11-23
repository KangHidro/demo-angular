import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { ReadRoutingParamsComponent } from './read-routing-params/read-routing-params.component';
import { ReadRoutingQueryParamsComponent } from './read-routing-query-params/read-routing-query-params.component';
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
import { Vd17InterceptorComponent } from './vd17-interceptor/vd17-interceptor.component';
import { Vd18FormGroupComponent } from './vd18-form-group/vd18-form-group.component';
import { Vd19FormArrayComponent } from './vd19-form-array/vd19-form-array.component';
import { Vd20FormValidatorCtmVldtrComponent } from './vd20-form-validator-ctm-vldtr/vd20-form-validator-ctm-vldtr.component';
import { Vd21RoutingComponent } from './vd21-routing/vd21-routing.component';
import { Vd23DomSanitizerComponent } from './vd23-dom-sanitizer/vd23-dom-sanitizer.component';
import { Vd25InteractionComponentsComponent } from './vd25-interaction-components/vd25-interaction-components.component';
import { Vd26HostEventListenerComponent } from './vd26-host-event-listener/vd26-host-event-listener.component';

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
  { path: 'vd17', component: Vd17InterceptorComponent },
  { path: 'vd18', component: Vd18FormGroupComponent },
  { path: 'vd19', component: Vd19FormArrayComponent },
  { path: 'vd20', component: Vd20FormValidatorCtmVldtrComponent },
  { path: 'vd21', component: Vd21RoutingComponent },
  { path: 'read-params/:id', component: ReadRoutingParamsComponent },
  { path: 'read-query-params', component: ReadRoutingQueryParamsComponent },
  {
    path: 'vd22',
    loadChildren: () => import('./vd22-lazy-loading/vd22-lazy-loading.module').then(m => m.Vd22LazyLoadingModule)
  },
  { path: 'vd23', component: Vd23DomSanitizerComponent },
  { path: 'vd25', component: Vd25InteractionComponentsComponent },
  { path: 'vd26', component: Vd26HostEventListenerComponent },
  {
    path: 'vd30',
    loadChildren: () => import('./vd30-guards/vd30-guard.module').then(m => m.Vd30GuardModule)
  },
  {
    path: 'vd31',
    loadChildren: () => import('./vd31-standalone-comp/vd31-standalone-comp.module').then(m => m.Vd31StandaloneCompModule)
  },

  // { path: '**', redirectTo: 'vd02', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
