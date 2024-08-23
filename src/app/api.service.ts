import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, Observable, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl =[ 'http://127.0.0.1:8000/register/',
                    'http://127.0.0.1:8000/login/',
                     'http://127.0.0.1:8000/',
                     'http://127.0.0.1:8000/api/token/refresh/',
                     'http://127.0.0.1:8000/video/'
                    ]
  

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
  //Fonction pour le rafraichisement de la page une fois token expiré
  refreshAccessToken(): Observable<any>{
    const refresh_token = localStorage.getItem("refresh_token");

    return this.http.post(this.apiUrl[3], {refresh: refresh_token})
  }
//Recuperer les donners 
  getData(token:any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` //Utilisation du token 
    }); 
    
    return this.http.get(this.apiUrl[2], {headers}).pipe(
      catchError(error =>{
        if (error.status === 401){
          return this.refreshAccessToken().pipe(
            switchMap((response:any) =>{
              const new_access_token = response['access'];
              localStorage.setItem('access_token', new_access_token)
              return this.http.get(this.apiUrl[2], {
                headers: new HttpHeaders({
                  'Authorization': `Bearer ${new_access_token}`
                })
              });
            })
          );
        }else {
          console.log('pas sa')
          return throwError(error)
        }
      })
    )
  }

  //Fonction pour recuper une vidoe a l'aide de son id
  getVideo(id:any):Observable<any>{
    //En têtê du requet pour envoyer de donner
    const headers = new HttpHeaders({
        "Content-Type": 'application/json'
    });
    const data = {
      "videoId": id
    }
    return this.http.post(this.apiUrl[4],data ,{headers}).pipe(
      catchError( error=>{
        console.error(error);
        return throwError(error)
      })
    )
  }
}


