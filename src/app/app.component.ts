import { Component } from '@angular/core';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zoomcar';

  registerObj:any={
    "userId":0,
    "name":"",
    "userRole":"",
    "emailId":"",
    "mobile":"",
    "password":"",
    "createdOn":new Date()
  }

  constructor(private serv:CarService){

  }

  onRegister(){
    this.serv.registerUser(this.registerObj).subscribe((res:any)=>{
      if(res.result){
        alert("Registration is success")
        this.closeRegister()
      }else{
        alert(res.message)

      }
    })
  }
  openRegister(){
    const model=document.getElementById('registerModal')
    if(model !=null){
     model.style.display='block'
    }
  }

  closeRegister(){
    const model=document.getElementById('registerModal')
    if(model !=null){
     model.style.display='none'
    }
  }
}
