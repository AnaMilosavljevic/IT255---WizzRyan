import { Injectable } from '@angular/core';
import { FlightPriceService } from './flight-price.service';

@Injectable()

export class FlightService {
  constructor(private flightPriceService: FlightPriceService) {}

  getPrice(numberOfFlights: number): number {
    return this.flightPriceService.calculatePrice(numberOfFlights);
  }
}
