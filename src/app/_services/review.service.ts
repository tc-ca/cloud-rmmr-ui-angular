import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MeetingRoomReview } from '../_classes/MeetingRoomReview';
import { __MeetingRoomReviews } from '../_mocking/mock-MeetingRoomReviews';

@Injectable({
  providedIn: 'root'
})

export class ReviewService {

  constructor() { }

  getReviews(): Observable<MeetingRoomReview[]> {
    return of(__MeetingRoomReviews);
  }

  getReview(id: number): Observable<MeetingRoomReview> {
    const review = __MeetingRoomReviews.find(x => x.id === id);

    return of(review);
  }

  addReview (review: MeetingRoomReview): Observable<MeetingRoomReview> {
    __MeetingRoomReviews.push(review);

    return of(review);
  }
}
