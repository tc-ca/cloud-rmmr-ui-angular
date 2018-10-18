import { Component, OnInit } from '@angular/core';
import { MeetingRoomReview } from '../_classes/MeetingRoomReview';
import { __MeetingRoomReviews } from '../_mocking/mock-MeetingRoomReviews';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  list = __MeetingRoomReviews;
  selectedItem: MeetingRoomReview;

  constructor() { }

  ngOnInit() {
  }

  onSelect(item: MeetingRoomReview): void {
    this.selectedItem = item;
  }
}
