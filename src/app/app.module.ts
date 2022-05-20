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


@NgModule({
  declarations: [
    AppComponent,
    Vd02StringInterpolationComponent,
    Vd04BindingComponent,
    MyCompComponent,
    Vd05BuiltInDirectivesComponent,
    Vd06CustomDirectivesComponent,
    NumberSeparatorDirective,
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
