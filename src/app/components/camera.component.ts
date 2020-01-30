import { Component, Input } from '@angular/core';
import { CameraPictures } from '../models/camera.pictures.model';
import { emptyCameraPictures } from '../config/mock.data';

@Component({
    selector: 'camera',
    templateUrl: './../templates/camera.html'
})
export class CameraComponent {
    @Input("cameraPictures") cameraPictures: CameraPictures = emptyCameraPictures;
    currentImage:String;
    currentIndex:number;

    ngOnInit() {
        this.currentIndex = 0;
        this.currentImage = this.cameraPictures.imageUrl[this.currentIndex];
    }

    previousImage() {
        this.currentIndex = (this.currentIndex - 1) % this.cameraPictures.imageUrl.length;
        this.currentImage = this.cameraPictures.imageUrl[this.currentIndex];
    }

    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.cameraPictures.imageUrl.length;
        this.currentImage = this.cameraPictures.imageUrl[this.currentIndex];
    }
}
  