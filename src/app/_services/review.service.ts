import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { MeetingRoomReview } from '../_classes/MeetingRoomReview';
import { __MeetingRoomReviews } from '../_mocking/mock-MeetingRoomReviews';

@Injectable({
  providedIn: 'root'
})

export class ReviewService {

  endpoint = 'https://tcapitest.azurewebsites.net/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-api-key': ''
    })
  };

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getReviews(): Observable<any> {
    return this.http.get(this.endpoint + 'reviews').pipe(
      map(this.extractData));
  }

  // getReviews(): Observable<MeetingRoomReview[]> {
  //   return of(__MeetingRoomReviews);
  // }

  getReview(id: number): Observable<MeetingRoomReview> {
    const review = __MeetingRoomReviews.find(x => x.id === id);

    return of(review);
  }

  addReview (review: MeetingRoomReview): Observable<MeetingRoomReview> {
    __MeetingRoomReviews.push(review);

    return of(review);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
