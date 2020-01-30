import { MarsRover } from "../models/marsRover.model";
import { CameraPictures } from '../models/camera.pictures.model';

export const emptyRover:MarsRover = {
    cameraList : [],
    landDate : "",
    launchDate : "",
    maxSol : 0,
    name : "",
    totalPhotos : 0,
};

export const emptyCameraPictures:CameraPictures = {
    cameraFullName: "None",
    sol: 0,
    imageUrl: []
}