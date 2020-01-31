import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { HomeComponent } from './home.component';
import { CameraComponent } from './camera.component';
import { AppComponent } from '../app.component';
import { NasaService } from '../services/nasa.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CommonModule } from '@angular/common';

describe('HomeComponent', () => {
    let fixture:ComponentFixture<HomeComponent>;
    let app:any;
    let compiled:any;

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
        fixture = TestBed.createComponent(HomeComponent);
        app = fixture.debugElement.componentInstance;
        compiled = fixture.debugElement.nativeElement;
    }));

    it('should create a component', () => {
        expect(app).toBeTruthy();
    });

    it('should have a header h1', () => {
        expect(compiled.querySelector('h1').textContent).toContain('Curiosity Images');
    });
});
