import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppComponent } from './app.component';
import { CameraComponent } from './components/camera.component';
import { HomeComponent } from './components/home.component';
import { NasaService } from './services/nasa.service';

@NgModule({
  declarations: [
    AppComponent, CameraComponent, HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgMultiSelectDropDownModule,
    HttpClientModule
  ],
  providers: [NasaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
