import { Component } from '@angular/core';
import { MarsRover } from './../models/marsRover.model';


@Component({
    selector: 'home',
    templateUrl: './templates/home.html'
})
export class HomeComponent {
    marsRover: MarsRover;

    constructor() {
    }

    ngOnInit() {
        
    }
}
  