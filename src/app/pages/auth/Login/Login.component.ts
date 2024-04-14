import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetToastService } from 'src/app/services/Alertas/sweetToast.service';
import { AuthService } from 'src/app/services/auth/auth.service';
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
  UserNameLogin: string = '';
  PasswordLogin: string = '';
  //Register
  UserNameRegister: string = '';
  PasswordRegister: string = '';
  PasswordConfirmRegister: string = '';

  load() {
    this.loading = true;

    setTimeout(() => {
        this.loading = false
    }, 2000);
}
  constructor(
    private route: Router,
    private ActRouter: ActivatedRoute,
    private toastService: SweetToastService,
    private authService:AuthService

  ) { }

  ngOnInit() {
  }

  RegisteredClick(){
    this.isNotRegistered = !this.isNotRegistered
    console.log("Registered Clicked", this.isNotRegistered);

  }


Login() {
  this.loading = true;
  this.authService.login(this.UserNameLogin, this.PasswordLogin).subscribe(
    (data: any) => {
      console.log(data);
      console.log("data enviada:", JSON.stringify(data));
      this.toastService.show({
        icon: "success",
        title: "Login Exitoso"
      });
      this.loading = false;
      this.route.navigate(['home']);
      
    },
    (error) => {
      console.log(error);
      this.toastService.show({
        icon: "error",
        title: "Usuario o contraseña incorrectos"
      });
      this.loading = false;
    }
  );
}
}
