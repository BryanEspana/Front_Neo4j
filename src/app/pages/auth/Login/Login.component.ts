import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetToastService } from 'src/app/services/Alertas/sweetToast.service';
import Swal from 'sweetalert2';



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
    private ActRouter: ActivatedRoute,
    private toastService: SweetToastService

  ) { }

  ngOnInit() {
  }

  RegisteredClick(){
    this.isNotRegistered = !this.isNotRegistered
    console.log("Registered Clicked", this.isNotRegistered);

  }

  Login() {
    this.loading = true;
  
    if(this.UserNameLogin == 'admin' && this.PasswordLogin == 'admin'){
      setTimeout(() => {
          this.loading = false
          this.toastService.show({
            icon: "success",
            title: "Inicio de sesión valido"
          });
          this.route.navigate(['home']);
      }, 1000);
    }else{
      setTimeout(() => {
        this.loading = false
        this.toastService.show({
          icon: "error",
          title: "Usuario o contraseña invalido"
        });
    }, 1000);

    }
}
}
