import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8085/ims/api/dealers';

  constructor(private http:HttpClient) { }

  saveDealer(dealer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, dealer);
  }

  loginDealer(dealer: any): Observable<any> {
    return this.http.post(`http://localhost:8085/ims/api/dealer`, dealer);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
 
  logOut() {
    sessionStorage.removeItem('username')
  }

  getDealersList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}
