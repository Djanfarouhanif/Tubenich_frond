import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/register/'
  private getapiUrl = 'http://127.0.0.1:8000/'

  constructor(private http: HttpClient) { }
  // Method pour envoyer une method post
  postData(data:any): Observable<any>{
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      return this.http.post(this.apiUrl, data, {headers})
  };
//Recuperer les donners 
  getData(): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(this.getapiUrl)
  }
}


