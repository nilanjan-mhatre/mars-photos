import { TestBed, async, ComponentFixture, inject } from "@angular/core/testing";
import { CameraComponent } from './camera.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HomeComponent } from './home.component';
import { NasaService } from '../services/nasa.service';
import { photoDataMockJson } from '../config/mock.data';

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
            HttpClientTestingModule, CommonModule
            ],
            providers: [NasaService]
        }).compileComponents();
        fixture = TestBed.createComponent(CameraComponent);
        app = fixture.debugElement.componentInstance;
    }));

    it('should create a component', () => {
        expect(app).toBeTruthy();
    });

    it('should flow through urls using the Next/Prev buttons', () => {
        let comp:CameraComponent = fixture.componentInstance;
        inject([HttpTestingController, NasaService],
            (httpMock: HttpTestingController, service: NasaService) => {
              // We call the service
              service.getFilteredPhotosByCameraAndSol(333, "FHAZ").subscribe(data => {
                    console.log(comp.currentIndex);
                    expect(comp.currentIndex).toEqual(0);
              });

              const req = httpMock.expectOne('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=iObeVa3o6mrIqKZ5quQRboy1FeaDF48I12KEajxo&sol=333&camera=FHAZ');
              expect(req.request.method).toEqual('GET');
              req.flush({data: photoDataMockJson});
              httpMock.verify();
        });

        expect(comp.currentIndex).toEqual(-1);
        comp.imageUrlList = ["url0", "url1"];
        comp.currentIndex = 0;
        comp.nextImage();
        expect(comp.currentIndex).toEqual(1);
    });
    afterEach(inject([HttpTestingController], (httpMock: HttpTestingController, service:NasaService) => {
        httpMock.verify();
      }));
});
