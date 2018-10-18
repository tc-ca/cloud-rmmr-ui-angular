import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MeetingRoomReview } from '../_classes/MeetingRoomReview';
import { ReviewService } from '../_services/review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})

export class ReviewListComponent implements OnInit {
  list: any = [];
  selectedItem: MeetingRoomReview;

  constructor(public service: ReviewService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    this.list = [];

    this.service.getReviews().subscribe((data: {}) => {
      console.log(data);
      this.list = data;
    });
  }

  onSelect(item: MeetingRoomReview): void {
    this.selectedItem = item;
  }
}
