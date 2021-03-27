import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
  }


  async onLogin(email,password) {
    try {
      const user = await this.authSvc.login(email.value,password.value);
      if(user){
        // To do: checkingEmail
        console.log("user", user);
      }

    } catch (error) {
      console.log(error);
    }
  }

  /*async onLoginGoogle(){
    try {
      const user = await this.authSvc.loginGoogle....;
    } catch (error) {
      console.log(error);
    }
  }*/


}
