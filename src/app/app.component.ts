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
  ngOnInit(): void {
    
  }
  
  onRegister(){
    // this.serv.registerUser(this.registerObj).subscribe((res:any)=>{
    //   if(res.result){
    //     alert("Registration is sucess")
    //     this.closeRegister()
    //   }else{

    //   }alert(res.message)
    // })
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

  onLogin(){
   // this.serv.registerUser(this.registerObj).subscribe((res:any)=>{
    //   if(res.result){
    //     alert("Login is sucess")
    // localStorage.setItem('zoomUser',JSON.stringify(res.data))
    //     this.closeLogin()
    //   }else{

    //   }alert(res.message)
    // })
  }
  openLogin(){
    const model=document.getElementById('loginModal')
    if(model !=null){
     model.style.display='block'
    }
  }

  closeLogin(){
    const model=document.getElementById('loginModal')
    if(model !=null){
     model.style.display='none'
    }
  }


}
