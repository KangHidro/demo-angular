import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'vi-VN' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
