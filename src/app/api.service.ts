import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl =[ 'http://127.0.0.1:8000/register/',
                    'http://127.0.0.1:8000/login/',
                     'http://127.0.0.1:8000/']
  

  constructor(private http: HttpClient) { }
  // Method pour envoyer une method post: enregistre l'utilisateur
  postData(data:any): Observable<any>{
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      return this.http.post(this.apiUrl[0], data, {headers})
  };
  // Method pour envoyer une method post: Connextion de l'utilisateur
  loginUser(data:any):Observable<any>{
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      })
    return this.http.post(this.apiUrl[1], data,{headers})
  }
//Recuperer les donners 
  getData(token:string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` //Utilisation du token 
    }); 
    
    return this.http.get(this.apiUrl[2], {headers});
  }
}


