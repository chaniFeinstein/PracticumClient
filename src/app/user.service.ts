import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import user from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( public http:HttpClient ) { }
  curentUserSer:user=new user(0,"","","","","","",0,"","")
  baseRouteUrl=`${environment.baseUrl}/User`;
   addUser(user:user){
    console.log(user);
    
    return this.http.post<user>(`${this.baseRouteUrl}`,{
      "firstName": user.FirstName,
      "lastName": user.LastName,
      "tz": user.TZ,
      "gender": user.Gender,
      "bornDate":user.BornDate,
      "hmo":user.HMO,
      "familyId": 0,
      "status":user.Status,
      "getTz": user.GetTz,
      }
    )
  }
  
  getUsers(){
    return this.http.get<user[]>(`${this.baseRouteUrl}`)
  }
}