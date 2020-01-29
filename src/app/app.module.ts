import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppComponent } from './app.component';
import { CameraComponent } from './components/camera.component';
import { HomeComponent } from './components/home.component';

@NgModule({
  declarations: [
    AppComponent, CameraComponent, HomeComponent
  ],
  imports: [
    BrowserModule, NgMultiSelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
