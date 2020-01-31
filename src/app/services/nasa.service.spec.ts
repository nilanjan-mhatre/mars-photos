import { TestBed, async, ComponentFixture, getTestBed } from "@angular/core/testing";
import { NasaService } from './nasa.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CameraComponent } from '../components/camera.component';
import { HomeComponent } from '../components/home.component';
import { AppComponent } from '../app.component';
import { roverDetailsMockObj } from '../config/mock.data';
import { MarsRover } from '../models/marsRover.model';

describe('CameraComponent', () => {
    let injector:TestBed;
    let nasaService:NasaService;

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
        injector = getTestBed();
        nasaService = injector.get(NasaService);
    }));

    it('should get Rover API call Observable', () => {
        let obj:any = nasaService.getRoverDetails();
        expect(obj instanceof Observable).toBeTruthy();
    });

    it('should parse Rover details json into MarsRover object', () => {
        let marsRover:MarsRover = nasaService.parseRoverDetails(roverDetailsMockObj);
        expect(marsRover.name).toEqual("Curiosity");
        expect(marsRover.maxSol).toEqual(2540);
        expect(marsRover.totalPhotos).toEqual(366206);
        expect(marsRover.cameraList.length).toEqual(7);
    });
});
