import { Component } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { HttpClient, HttpParams } from '@angular/common/http';

import { MarsRover } from './../models/marsRover.model';
import { NasaService } from '../services/nasa.service';
import { emptyRover } from '../config/mock.data';
import { Camera } from '../models/camera.model';


@Component({
    selector: 'home',
    templateUrl: './../templates/home.html'
})
export class HomeComponent {
    marsRover: MarsRover;
    dropdownSettings:IDropdownSettings;
    selectedCameras:Camera[] = [];
    viewCameras:Camera[] = [];
    cameraList:Camera[] = [];
    selectedSol:Number;
    modelSol:Number;

    constructor(private http: HttpClient,
                private nasaService:NasaService) {
        this.marsRover = emptyRover;
        this.selectedSol = 0;

        this.dropdownSettings = {
            singleSelection: false,
            idField: 'name',
            textField: 'fullName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    }

    copySolValue() {
        this.selectedSol = this.modelSol;
    }

    ngOnInit() {
        this.nasaService.getRoverDetails().subscribe((data: Object) => {
            this.marsRover = this.nasaService.parseRoverDetails(data);
            this.setCameraList(this.marsRover);
        });
        // this.cameraList = [{name: "abc", fullName:"ABC"}]
    }

    setCameraList(rover: MarsRover): void {
        this.cameraList = rover.cameraList.map(cam => ({name: cam.name, fullName:cam.fullName, view: false}));
        this.viewCameras = this.cameraList;
    }

    onSelectCamera(camera:Camera) {
        this.viewCameras.forEach(cam => {
            if(camera.name == cam.name) {
                cam.view = true;
            }
        });
    }

    onUnSelectCamera(camera:Camera) {
        this.viewCameras.forEach(cam => {
            if(camera.name == cam.name) {
                cam.view = false;
            }
        });
        console.log(this.viewCameras);
    }

    onSelectAllCamera(cameraList:Camera[]) {
        this.viewCameras.forEach(cam => {
            cam.view = true;
        });
        
    }

    onUnSelectAllCamera(cameraList:Camera[]) {
        this.viewCameras.forEach(cam => {
            cam.view = false;
        });
    }
}
  