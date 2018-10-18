import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MeetingRoom } from '../_classes/MeetingRoom';
import { RoomService } from '../_services/room.service';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {

  @Input() room: MeetingRoom;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getRoom();
  }

  getRoom(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.roomService.getRoom(id);
  }

  actionBack(): void {
    this.location.back();
  }

  actionCancel(): void {
    this.actionBack();
  }

  actionSave(): void {
    this.roomService.addRoom(this.room)
      .subscribe(() => this.actionBack());
  }
}
