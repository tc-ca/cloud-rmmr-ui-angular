import { Component, OnInit } from '@angular/core';
import { MeetingRoom } from '../_classes/MeetingRoom';
import { __MeetingRooms } from '../_mocking/mock-MeetingRooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  list = __MeetingRooms;
  selectedItem: MeetingRoom;

  constructor() { }

  ngOnInit() {
  }

  onSelect(item: MeetingRoom): void {
    this.selectedItem = item;
  }
}
