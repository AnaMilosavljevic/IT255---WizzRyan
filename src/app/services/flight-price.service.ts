import { Injectable } from '@angular/core';

@Injectable()

export class FlightPriceService {
    constructor() { }

    calculatePrice(numberOfFlights: number): number {
        return numberOfFlights * 450;
    }
}
