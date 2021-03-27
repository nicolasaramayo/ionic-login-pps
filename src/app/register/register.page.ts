import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
  }

 async onRegister(email, password){
    try {
     const user = await this.authSvc.register(email.value,password.value);
     if (user) {
       //chequear el email.
       console.log(user);
     } 
    } catch (error) {
      console.log(error);
    }
    
    //console.log("email", email);
    //console.log("password", password);
  }
}
