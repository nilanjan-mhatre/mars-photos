import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './templates/home.html'
})
export class HomeComponent {
    launchDate: string;
    landDate: string;
    totalPhotos: Number;
    maxSol: Number;

    constructor() {
        this.launchDate = '';
        this.landDate = '';
        this.totalPhotos = 0;
        this.maxSol = 0;
    }

    ngOnInit() {
        
    }
}
  