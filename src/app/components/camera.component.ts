import { Component, OnInit, Input } from '@angular/core';
import { NasaService } from '../services/nasa.service';
import { Camera } from '../models/camera.model';

@Component({
    selector: 'camera',
    templateUrl: './../templates/camera.html'
})
export class CameraComponent implements OnInit {
    @Input("camera") camera: Camera;
    //@Input("sol") sol: Number = 0;
    imageUrlList: String[] = [];
    currentImage: String = "";
    currentIndex: number = -1;
    selectedSol:number;

    @Input()
    set sol(sol: number) {
        this.updateView(sol);
    }

    constructor(private nasaService: NasaService) {
    }

    ngOnInit() {
        this.updateView();
    }

    updateView(sol=0) {
        this.selectedSol = sol;
        if(this.selectedSol > 0) {
            this.nasaService.getFilteredPhotosByCameraAndSol(this.selectedSol, this.camera.name)
                .subscribe((data: Object) => {
                    this.imageUrlList = this.nasaService.parseImageUrlJson(data);
                    if(this.imageUrlList.length > 0) {
                        this.currentIndex = 0;
                    } else {
                        this.currentIndex = -1;
                    }
                    this.currentImage = this.imageUrlList[this.currentIndex];
                });
        }
    }

    previousImage() {
        if(this.currentIndex == 0) {
            this.currentIndex = this.imageUrlList.length - 1;
        } else {
            this.currentIndex = (this.currentIndex - 1)
        }
        this.currentImage = this.imageUrlList[this.currentIndex];
    }

    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.imageUrlList.length;
        this.currentImage = this.imageUrlList[this.currentIndex];
    }
}
  