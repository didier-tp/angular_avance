export class Currency{
    constructor(
        public code : string,
        public value : number){}
}

export interface CurrencyMap{
    [index: string] :  number;
}

export interface FixerIoResponse {
    success : boolean;
    timestamp: number;
    base:string; //ex: "EUR" (Euro)
    date : string ; // ex: "2021-11-03"
    rates :  CurrencyMap
}