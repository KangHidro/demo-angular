import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import vi from '@angular/common/locales/vi';
import { registerLocaleData } from '@angular/common';
registerLocaleData(vi);

import { Vd02StringInterpolationComponent } from './vd02-string-interpolation/vd02-string-interpolation.component';
import { Vd04BindingComponent } from './vd04-binding/vd04-binding.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Vd05BuiltInDirectivesComponent } from './vd05-built-in-directives/vd05-built-in-directives.component';
import { Vd06CustomDirectivesComponent } from './vd06-custom-directives/vd06-custom-directives.component';
import { NumberSeparatorDirective } from './vd06-custom-directives/number-separator.directive';
import { Vd07InputOutputComponent } from './vd07-input-output/vd07-input-output.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { Vd08InteractionCompComponent } from './vd08-interaction-comp/vd08-interaction-comp.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { Vd09TemplateRefVarComponent } from './vd09-template-ref-var/vd09-template-ref-var.component';
import { Vd10ViewchildViewchildrenComponent } from './vd10-viewchild-viewchildren/vd10-viewchild-viewchildren.component';
import { Vd11ContentProjectionComponent } from './vd11-content-projection/vd11-content-projection.component';
import { ShowContentComponent } from './show-content/show-content.component';
import { ShowContentMultiComponent } from './show-content-multi/show-content-multi.component';
import { Vd12BuiltInPipesComponent } from './vd12-built-in-pipes/vd12-built-in-pipes.component';
import { Vd13CustomPipesComponent } from './vd13-custom-pipes/vd13-custom-pipes.component';
import { CurrencyPipe } from './vd13-custom-pipes/currency.pipe';
import { Vd15HttpClientComponent } from './vd15-http-client/vd15-http-client.component';
import { Vd16HandleHttpErrorComponent } from './vd16-handle-http-error/vd16-handle-http-error.component';
import { Vd17InterceptorComponent } from './vd17-interceptor/vd17-interceptor.component';
import { AuthInterceptor } from './vd16-handle-http-error/auth.interceptor';
import { Vd18FormGroupComponent } from './vd18-form-group/vd18-form-group.component';
import { Vd19FormArrayComponent } from './vd19-form-array/vd19-form-array.component';
import { Vd20FormValidatorCtmVldtrComponent } from './vd20-form-validator-ctm-vldtr/vd20-form-validator-ctm-vldtr.component';
import { Vd21RoutingComponent } from './vd21-routing/vd21-routing.component';
import { ReadRoutingParamsComponent } from './read-routing-params/read-routing-params.component';
import { Page404Component } from './page404/page404.component';
import { ReadRoutingQueryParamsComponent } from './read-routing-query-params/read-routing-query-params.component';
import { Vd23DomSanitizerComponent } from './vd23-dom-sanitizer/vd23-dom-sanitizer.component';
import { SafeHtmlPipe } from './vd23-dom-sanitizer/safe-html.pipe';
import { Vd25InteractionComponentsComponent } from './vd25-interaction-components/vd25-interaction-components.component';
import { TrackingDataComponent } from './tracking-data/tracking-data.component';
import { Vd26HostEventListenerComponent } from './vd26-host-event-listener/vd26-host-event-listener.component';
import { Vd32TypedFormComponent } from './vd32-typed-form/vd32-typed-form.component';
import { Vd33TypedFormArrayComponent } from './vd33-typed-form-array/vd33-typed-form-array.component';


@NgModule({
  declarations: [
    AppComponent,
    Vd02StringInterpolationComponent,
    Vd04BindingComponent,
    MyCompComponent,
    Vd05BuiltInDirectivesComponent,
    Vd06CustomDirectivesComponent,
    NumberSeparatorDirective,
    Vd07InputOutputComponent,
    ItemDetailComponent,
    ItemOutputComponent,
    Vd08InteractionCompComponent,
    InputOutputComponent,
    Vd09TemplateRefVarComponent,
    Vd10ViewchildViewchildrenComponent,
    Vd11ContentProjectionComponent,
    ShowContentComponent,
    ShowContentMultiComponent,
    Vd12BuiltInPipesComponent,
    Vd13CustomPipesComponent,
    CurrencyPipe,
    Vd15HttpClientComponent,
    Vd16HandleHttpErrorComponent,
    Vd17InterceptorComponent,
    Vd18FormGroupComponent,
    Vd19FormArrayComponent,
    Vd20FormValidatorCtmVldtrComponent,
    Vd21RoutingComponent,
    ReadRoutingParamsComponent,
    Page404Component,
    ReadRoutingQueryParamsComponent,
    Vd23DomSanitizerComponent,
    SafeHtmlPipe,
    Vd25InteractionComponentsComponent,
    TrackingDataComponent,
    Vd26HostEventListenerComponent,
    Vd32TypedFormComponent,
    Vd33TypedFormArrayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'vi-VN' },
    // START Interceptor Provider:
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // },
    // END Interceptor Provider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
