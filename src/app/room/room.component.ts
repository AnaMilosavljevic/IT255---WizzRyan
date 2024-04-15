import { Component, OnInit, HostBinding, Input } from '@angular/core';

import { Room } from './room.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() room: Room;

  constructor() {
    this.room = new Room(
      'Double room with garden view',
      '6001'
    );

  }
  ngOnInit() {
  }

}
