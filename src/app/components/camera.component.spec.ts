import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { CameraComponent } from './camera.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HomeComponent } from './home.component';
import { NasaService } from '../services/nasa.service';

describe('CameraComponent', () => {
    let fixture:ComponentFixture<CameraComponent>;
    let app:any;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [
              AppComponent, CameraComponent, HomeComponent
          ],
          imports: [
          BrowserModule, FormsModule, NgMultiSelectDropDownModule,
          HttpClientModule, CommonModule
          ],
          providers: [NasaService]
      }).compileComponents();
      fixture = TestBed.createComponent(CameraComponent);
      app = fixture.debugElement.componentInstance;
}));

    it('should create a component', () => {
        expect(app).toBeTruthy();
    });
});
