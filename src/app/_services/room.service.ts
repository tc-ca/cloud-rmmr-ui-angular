import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MeetingRoom } from '../_classes/MeetingRoom';
import { __MeetingRooms } from '../_mocking/mock-MeetingRooms';

@Injectable({
  providedIn: 'root'
})

export class RoomService {

  constructor() { }

  getRooms(): Observable<MeetingRoom[]> {
    return of(__MeetingRooms);
  }

  getRoom(code: number): Observable<MeetingRoom> {
    const review = __MeetingRooms.find(x => x.code === code);

    return of(review);
  }

  addRoom (room: MeetingRoom): Observable<MeetingRoom> {
    __MeetingRooms.push(room);

    return of(room);
  }
}
