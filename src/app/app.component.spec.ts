import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CameraComponent } from './components/camera.component';
import { HomeComponent } from './components/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CommonModule } from '@angular/common';
import { NasaService } from './services/nasa.service';

describe('AppComponent', () => {
  let fixture:ComponentFixture<AppComponent>;
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
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
      expect(app).toBeTruthy();
  });

  it(`should have as title 'mars-photos'`, () => {
      expect(app.title).toEqual('mars-photos');
  });
});
