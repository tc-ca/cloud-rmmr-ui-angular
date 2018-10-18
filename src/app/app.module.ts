import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ReviewNewComponent } from './review-new/review-new.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomEditComponent } from './room-edit/room-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewListComponent,
    HomeComponent,
    ReviewNewComponent,
    RoomListComponent,
    RoomEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
