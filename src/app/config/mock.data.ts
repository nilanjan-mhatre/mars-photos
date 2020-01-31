import { MarsRover } from "../models/marsRover.model";

export const emptyRover:MarsRover = {
    cameraList : [],
    landDate : "",
    launchDate : "",
    maxSol : 0,
    name : "",
    totalPhotos : 0,
};

export const roverDetailsMockObj:Object = {
    "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 2540,
        "max_date": "2019-09-28",
        "total_photos": 366206,
        "cameras": [
            {
                "name": "FHAZ",
                "full_name": "Front Hazard Avoidance Camera"
            },
            {
                "name": "NAVCAM",
                "full_name": "Navigation Camera"
            },
            {
                "name": "MAST",
                "full_name": "Mast Camera"
            },
            {
                "name": "CHEMCAM",
                "full_name": "Chemistry and Camera Complex"
            },
            {
                "name": "MAHLI",
                "full_name": "Mars Hand Lens Imager"
            },
            {
                "name": "MARDI",
                "full_name": "Mars Descent Imager"
            },
            {
                "name": "RHAZ",
                "full_name": "Rear Hazard Avoidance Camera"
            }
        ]
    }
};