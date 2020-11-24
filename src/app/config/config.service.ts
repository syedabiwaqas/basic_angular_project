import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { UrlConstants } from './constants';


const Headers = new HttpHeaders()
    .set('content-type', 'application/json');

// .set('Access-Control-Allow-Origin', '*')
// .set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');

@Injectable()
export class ConfigService {

    constructor(private httpClient: HttpClient) { }
    
    createGetRequest(url){
        return this.httpClient.get(url, {headers: Headers});
    }
    createPostRequest(url, data) {
        return this.httpClient.post<any>(url, data, {headers: Headers});
    }

}
