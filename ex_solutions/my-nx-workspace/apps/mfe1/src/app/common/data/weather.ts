import { GeoCoord } from "./geoCoord"

export interface WeatherDescription {
     description: string, /* "clear sky" or .... */
}


export interface Weather {
    coord : GeoCoord,
    weather : WeatherDescription[]
}
