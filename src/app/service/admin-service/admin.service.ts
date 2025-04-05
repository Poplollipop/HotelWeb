import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionService } from '../session/session.service';


const URL = "http://localhost:8080/";
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  postRoom(roomsDto: any): Observable<any> {
    return this.http.post(URL + "api/admin/rooms", roomsDto, {
      headers: this.createAuth(),
    })
  }

  getRoom(pageNumber: number): Observable<any> {
    return this.http.get(URL + `api/admin/rooms/${pageNumber}`, {
      headers: this.createAuth(),
    })
  }

  getRoomById(id: number): Observable<any> {
    return this.http.get(URL + `api/admin/room/${id}`, {
      headers: this.createAuth(),
    })
  }

  updateRoom(id: number, roomsDto: any): Observable<any> {
    return this.http.put(URL + `api/admin/room/${id}`, roomsDto, {
      headers: this.createAuth(),
    })
  }

  deleteRoom(roomId: number): Observable<any> {
    return this.http.delete(URL + `api/admin/room/${roomId}`, {
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
