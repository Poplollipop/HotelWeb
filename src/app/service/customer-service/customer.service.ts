import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from '../session/session.service';


const URL = "http://localhost:8080/";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getRoom(pageNumber: number): Observable<any> {
    return this.http.get(URL + `customer/rooms/${pageNumber}`, {
      headers: this.createAuth(),
    })
  }

  bookingRoom(bookingData: any): Observable<any> {
    return this.http.post(URL + `customer/booking`, bookingData, {
      headers: this.createAuth(),
    })
  }

  createAuth() {
    let authHeader: HttpHeaders = new HttpHeaders();
    return authHeader.set(
      'Authorization',
      'Bearer ' + SessionService.getToken()
    )
  }

}
