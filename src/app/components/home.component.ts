import { Component } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { HttpClient, HttpParams } from '@angular/common/http';

import { MarsRover } from './../models/marsRover.model';
import { AppSettings } from './../config/app.config';
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
    selectedCameras = [];
    cameraList = [];
    selectedSol:Number;

    constructor(private http: HttpClient,
                private nasaService:NasaService) {
        this.marsRover = emptyRover;
        this.selectedSol = 0;

        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    }

    ngOnInit() {
        this.nasaService.getRoverDetails().subscribe((data: Object) => {
            this.marsRover = this.nasaService.parseRoverDetails(data);
            this.setCameraList(this.marsRover);
        });
    }

    setCameraList(rover: MarsRover): void {
        this.cameraList = rover.cameraList.map(cam => ({id: cam.name, name:cam.fullName}));    
    }


}
  