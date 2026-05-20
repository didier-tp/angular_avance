export interface ZippopotamPlace{
    'place_name' : string,
    longitude : string,
    latitude : string,
    state : string,
    'state abbreviation' : string
}

export interface ZippopotamResponse{
    country : string,
    'country abbreviation' : string,
    'post code' : string,
    place :  [ ZippopotamPlace ],
}