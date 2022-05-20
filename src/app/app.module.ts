import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Vd02StringInterpolationComponent } from './vd02-string-interpolation/vd02-string-interpolation.component';
import { Vd04BindingComponent } from './vd04-binding/vd04-binding.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { FormsModule } from '@angular/forms';
import { Vd05BuiltInDirectivesComponent } from './vd05-built-in-directives/vd05-built-in-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    Vd02StringInterpolationComponent,
    Vd04BindingComponent,
    MyCompComponent,
    Vd05BuiltInDirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
