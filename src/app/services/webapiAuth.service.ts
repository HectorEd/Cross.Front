import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UrlHandlingStrategy} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebapiAuthService {
  urlBff='https://localhost:44364/';
  urlApi='api/Login/GetAuthentication'
  constructor(private http: HttpClient) {}
  getAuthenticate():Observable<any>{
    return this.http.get(this.urlBff + this.urlApi);
  }
}
