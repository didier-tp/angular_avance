
export interface ZippopotamPlace {
    'place_name' : string,
    state : string,
      longitude : string,
    latitude : string,
    'state abbreviation' : string
}

export interface ZippopotamResponse{
    country : string,
    'country abbreviation' : string,
    'post code' : string,
    places :  [ ZippopotamPlace ],
}