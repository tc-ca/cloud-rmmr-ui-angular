import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MeetingRoomReview } from '../_classes/MeetingRoomReview';
import { ReviewService } from '../_services/review.service';

@Component({
  selector: 'app-review-new',
  templateUrl: './review-new.component.html',
  styleUrls: ['./review-new.component.css']
})

export class ReviewNewComponent implements OnInit {
  @Input() review: MeetingRoomReview;

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.initReview();
  }

  initReview(): void {
    this.review.rating = 3;
    this.review.status = 1;
  }

  getReview(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.reviewService.getReview(id);
  }

  actionBack(): void {
    this.location.back();
  }

  actionCancel(): void {
    this.actionBack();
  }

  actionSave(): void {
    this.reviewService.addReview(this.review)
      .subscribe(() => this.actionBack());
  }
}
