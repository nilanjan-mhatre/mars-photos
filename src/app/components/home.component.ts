import { Component } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { HttpClient, HttpParams } from '@angular/common/http';

import { MarsRover } from './../models/marsRover.model';
import { AppSettings } from './../config/app.config';
import { NasaService } from '../services/nasa.service';
import { emptyRover } from '../config/mock.data';
import { Camera } from '../models/camera.model';
import { CameraPictures } from '../models/camera.pictures.model';


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
    cameraPictures:CameraPictures;
    cameraMap: Map<String, CameraPictures>;

    constructor(private http: HttpClient,
                private nasaService:NasaService) {
        this.marsRover = emptyRover;
        this.selectedSol = 0;
        this.cameraMap = new Map();

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

    ngOnInit() {
        /* this.nasaService.getRoverDetails().subscribe((data: Object) => {
            this.marsRover = this.nasaService.parseRoverDetails(data);
            this.setCameraList(this.marsRover);
        });*/ 
        this.cameraPictures = {
            sol: 0,
            cameraFullName: "Abc",
            imageUrl: ["http://mars.jpl.nasa.gov/msl-raw-images/msss/00001/mcam/0001ML0000001000I1_DXXX.jpg",
                        "http://mars.jpl.nasa.gov/msl-raw-images/msss/00001/mcam/0001MR0000001000C0_DXXX.jpg"]
        }
    }

    setCameraList(rover: MarsRover): void {
        this.cameraList = rover.cameraList.map(cam => ({name: cam.name, fullName:cam.fullName}));    
    }

    getFilteredResultsBySol() {
        this.nasaService.getFilteredResultsBySol(this.selectedSol).subscribe((data: Object) => {
            this.marsRover = this.nasaService.parseRoverDetails(data);
            this.setCameraList(this.marsRover);
        });

    }
}
  