import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  BASE_URI = 'http://192.168.83.128:8000';

  private _registerUrl = this.BASE_URI + '/api/v1/registration';
  private _logUrl = this.BASE_URI + '/api/v1/login';

  constructor(private _http: HttpClient) { }

  register(data) {
    return this._http.post(this._registerUrl, data);
  }
  login(data){
    return this._http.post(this._logUrl, data);
  }
}
