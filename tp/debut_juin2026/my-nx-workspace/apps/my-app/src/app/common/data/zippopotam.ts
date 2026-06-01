
export interface ZippopotamPlace{
     'place name':string;
    longitude:string;
    latitude:string;
     state:string;
    'state abbreviation':string;

}
export interface ZippopotamResponse{
    country : string;
    'country abbreviation' : string;
    'post code' : string;
    places: ZippopotamPlace[];
}