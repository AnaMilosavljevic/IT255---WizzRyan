import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { Room } from './room/room.model';
import { PageService } from './PageService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rooms: Room[];
  flightForm!: FormGroup;
  formSubmitted: boolean = false;
  additionalCost: number = 0;

  constructor(private fb: FormBuilder, private router: Router, public pageService: PageService) {
    this.rooms = [
      new Room('Belgrade - Tivat', 'AX6001'),
      new Room('Sarajevo - Ljubljana', 'YU8001'),
      new Room('Oslo - Athens', 'ZU5001'),
    ];

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.pageService.setIsHomePage(event.url === '/');
      }
    });
  }

  ngOnInit(): void {
    this.flightForm = this.fb.group({
      description: ['', Validators.required],
      roomno: ['', [Validators.required, Validators.minLength(6)]],
      businessClass: [false],
      freeFood: [false],
      directFlight: [false]
    });
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.flightForm.invalid) {
      return;
    }
    this.rooms.push(new Room(this.flightForm.value.description, this.flightForm.value.roomno));
    this.flightForm.reset();

    this.flightForm = this.fb.group({
  businessClass: [false]
});


    console.log('Business class:', this.flightForm.get('businessClass')?.value);
    console.log('Free food:', this.flightForm.get('freeFood')?.value);
    console.log('Direct flight:', this.flightForm.get('directFlight')?.value);

    this.calculateAdditionalCost();

    alert(`Your bill has been increased by ${this.additionalCost} EUR due to the selected additional services.`);
  }

  calculateAdditionalCost(): void {
    let additionalCost = 200;
    if (this.flightForm.value.businessClass) {
      additionalCost += 200;
    }
    if (this.flightForm.value.freeFood) {
      additionalCost += 50;
    }
    if (this.flightForm.value.directFlight) {
      additionalCost += 100;
    }
    this.additionalCost = additionalCost;

    console.log('Additional cost:', this.additionalCost);
  }
  
}
