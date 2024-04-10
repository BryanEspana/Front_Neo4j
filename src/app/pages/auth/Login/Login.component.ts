import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  isNotRegistered: boolean = false;
  //Login
  UserNameLogin: String = '';
  PasswordLogin: String = '';
  //Register
  UserNameRegister: String = '';
  PasswordRegister: String = '';
  PasswordConfirmRegister: String = '';

  load() {
    this.loading = true;

    setTimeout(() => {
        this.loading = false
    }, 2000);
}
  constructor(
    private route: Router,
    private ActRouter: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  RegisteredClick(){
    this.isNotRegistered = !this.isNotRegistered
    console.log("Registered Clicked", this.isNotRegistered);

  }

  Login() {
    this.loading = true;
  
    //routing by home
    if(this.UserNameLogin == 'admin' && this.PasswordLogin == 'admin'){
      setTimeout(() => {
          this.loading = false
      }, 1000);
        this.route.navigate(['home']);
    }else{
      setTimeout(() => {
        this.loading = false
    }, 1000);
    }
}
}
