import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.scss']
})
export class DIComponent implements OnInit {

  price: number = 0;

  constructor(private flightService: FlightService){}

  ngOnInit(): void {
    
  }

}
