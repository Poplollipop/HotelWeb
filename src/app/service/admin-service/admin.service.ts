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

  createAuth(){
    let authHeader: HttpHeaders = new HttpHeaders();
    return authHeader.set(
      'Authorization',
      'Bearer ' +SessionService.getToken()
    )
  }


}
