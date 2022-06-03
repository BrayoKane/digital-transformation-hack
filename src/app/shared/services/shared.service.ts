import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  BASE_URI = 'http://192.168.82.47:8000';

  private _registerUrl = this.BASE_URI + '/api/v1/registration';
  private _logUrl = this.BASE_URI + '/api/v1/login';
  private _userDetailsUrl = this.BASE_URI + '/api/v1/accounts/user_profile';

  constructor(private _http: HttpClient) { }

  // headers = new HttpHeaders({
  //   'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
  //   'JWTAUTH': 'Bearer ' + localStorage.getItem('jwt'),
  //   'Content-Type': 'application/json'
  // });

  register(data) {
    return this._http.post(this._registerUrl, data);
  }

  login(data) {
    return this._http.post(this._logUrl, data);
  }

  getUserProfileDetails() {
    return this._http.get(this._userDetailsUrl, {
      // attach headers here
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        'JWTAUTH': 'Bearer ' + localStorage.getItem('jwt'),
        'Content-Type': 'application/json'
      }),
    });
  }
}
