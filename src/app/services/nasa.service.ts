import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Camera } from '../models/camera.model';
import { HttpClient, HttpParams } from '@angular/common/http';

import { AppSettings } from './../config/app.config';
import { MarsRover } from '../models/marsRover.model';
import { emptyRover } from '../config/mock.data';

@Injectable()
export class NasaService {
    constructor(private http: HttpClient) {
    }

    getRoverDetails():Observable<any> {
        let params:HttpParams = new HttpParams()
                    .set(AppSettings.API_KEY_PARAM, AppSettings.API_KEY);
        return this.http.get(AppSettings.API_ENDPOINT, {params});
    }

    parseRoverDetails(data: Object):MarsRover {
        let marsRover:MarsRover = emptyRover;
        if(data != null && data['rover'] != null) {
            let rover:Object = data['rover'];

            marsRover.name = rover['name'];
            marsRover.landDate = rover['landing_date'];
            marsRover.launchDate = rover['launch_date'];
            marsRover.maxSol = rover['max_sol'];
            marsRover.totalPhotos = rover['total_photos'];
            rover['cameras'].forEach(cam => {
                let newCam:Camera = new Camera();
                newCam.name = cam['name'];
                newCam.fullName = cam['full_name'];
                marsRover.cameraList.push(newCam);
            });
        }
        return marsRover;
    }

    getFilteredResultsBySol(sol:Number):Observable<any> {
        let params:HttpParams = new HttpParams()
            .set(AppSettings.API_KEY_PARAM, AppSettings.API_KEY)
            .set(AppSettings.API_SOL_PARAM, sol.toString());
        return this.http.get(AppSettings.API_ENDPOINT + AppSettings.API_URL_PHOTOS, {params});
    }
}