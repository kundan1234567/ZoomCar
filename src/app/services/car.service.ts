import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
   apiEndPoint:string='https://freeapi.miniprojectideas.com/api/ZoomCar'
  constructor(private http:HttpClient) {
   }
registerUser(obj:any){
  this.http.post(this.apiEndPoint + 'AddNewUser',obj)
}
loginUser(obj:any){
  this.http.post(this.apiEndPoint + 'login',obj)
}

}
