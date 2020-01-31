import { MarsRover } from "../models/marsRover.model";

export const emptyRover:MarsRover = {
    cameraList : [],
    landDate : "",
    launchDate : "",
    maxSol : 0,
    name : "",
    totalPhotos : 0,
};

export const mockRover:MarsRover = {
    cameraList : [],
    landDate : "2012-08-06",
    launchDate : "2011-11-26",
    maxSol : 1000,
    name : "mock_name",
    totalPhotos : 2000,
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

export const photoDataMockJson:Object = {
    "photos": [
        {
            "id": 519,
            "sol": 333,
            "camera": {
                "id": 20,
                "name": "FHAZ",
                "rover_id": 5,
                "full_name": "Front Hazard Avoidance Camera"
            },
            "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00333/opgs/edr/fcam/FRB_427047830EDR_F0070368FHAZ00323M_.JPG",
            "earth_date": "2013-07-14",
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
        },
        {
            "id": 8894,
            "sol": 333,
            "camera": {
                "id": 20,
                "name": "FHAZ",
                "rover_id": 5,
                "full_name": "Front Hazard Avoidance Camera"
            },
            "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00333/opgs/edr/fcam/FLB_427068269EDR_F0080000FHAZ00302M_.JPG",
            "earth_date": "2013-07-14",
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
        },
        {
            "id": 8895,
            "sol": 333,
            "camera": {
                "id": 20,
                "name": "FHAZ",
                "rover_id": 5,
                "full_name": "Front Hazard Avoidance Camera"
            },
            "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00333/opgs/edr/fcam/FRB_427068269EDR_F0080000FHAZ00302M_.JPG",
            "earth_date": "2013-07-14",
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
        },
        {
            "id": 8896,
            "sol": 333,
            "camera": {
                "id": 20,
                "name": "FHAZ",
                "rover_id": 5,
                "full_name": "Front Hazard Avoidance Camera"
            },
            "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00333/opgs/edr/fcam/FLB_427047830EDR_F0070368FHAZ00323M_.JPG",
            "earth_date": "2013-07-14",
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
        }
    ]
}