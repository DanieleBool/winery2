// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ComuniService {
//   private baseUrl = 'http://localhost:5000/api/comuni';

//   constructor(private http: HttpClient) { }

//   getComuni(page: number, perPage: number): Observable<Comune[]> {
//     return this.http.get<Comune[]>(`${this.baseUrl}?page=${page}&perPage=${perPage}`);
//   }
// }

// interface Comune {
//   Sigla: string;
//   Provincia: string;
//   Superficie: number;
//   Residenti: number;
//   NumComuni: number;
//   IdRegione: number;
//   CodIstat: string;
//   Image: string;
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  constructor(private http: HttpClient) { }

  getComuni(page: number, perPage: number): Observable<any> {
    return this.http.get(`https://localhost:7177/api/comuni?page=${page}&perPage=${perPage}`);
  }
}
