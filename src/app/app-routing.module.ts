import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewNewComponent } from './review-new/review-new.component';
// import { ReviewEditComponent } from './review-edit/review-edit.component';
import { RoomListComponent } from './room-list/room-list.component';
// import { RoomNewComponent } from './room-new/room-new.component';
import { RoomEditComponent } from './room-edit/room-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'reviews', component: ReviewListComponent },
  { path: 'review-new', component: ReviewNewComponent },
  { path: 'rooms', component: RoomListComponent },
  { path: 'room/:id', component: RoomEditComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
