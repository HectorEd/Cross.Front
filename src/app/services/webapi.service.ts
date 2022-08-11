import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UrlHandlingStrategy} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  urlBff='https://localhost:44364/';
  urlApi='api/Repository/GetRepository'
  constructor(private http: HttpClient) {}
  getRepository():Observable<any>{
    return this.http.get(this.urlBff + this.urlApi);
  }
}
