import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetToastService } from 'src/app/services/Alertas/sweetToast.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

export interface sexo{
  id: string;
  name: string;

}

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  isNotRegistered: boolean = false;
  AdminPassword: string = 'admin123';
  AdminFormPassword: string = '';
  TypeUser: 'ADMIN' | 'USER' = "USER";
  //Login
  UserNameLogin: string = '';
  PasswordLogin: string = '';
  //Register
  NameRegister: string = '';
  LastNameRegister: string = '';
  UserNameRegister: string = '';
  selectedSexoRegister: string | null = null;
  ageRegister: number = 0;
  PasswordRegister: string = '';
  PasswordConfirmRegister: string = '';
  
  checked = false;
  //sexo
  sexo: sexo[] = [];

  //date
  date: Date | undefined;
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
    private authService:AuthService,
    private location: Location

  ) { }

  ngOnInit() {
    this.sexo = [
      { id: 'MALE', name: 'Masculino' },
      { id: 'FEMALE', name: 'Femenino' },
      { id: 'OTHER', name: 'Otro' },
    ]
  }

  RegisteredClick(){
    this.isNotRegistered = !this.isNotRegistered
    console.log("Registered Clicked", this.isNotRegistered);

  }


Login() {
  this.loading = true;
  this.authService.login(this.UserNameLogin, this.PasswordLogin).subscribe(
    (data: any) => {
      console.log("data sin json:",data);
      console.log("data enviada:", JSON.stringify(data));
      if(data != undefined){
        this.toastService.show({
          icon: "success",
          title: "Login Exitoso"
        });
        this.loading = false;
        this.route.navigate(['home']);
        localStorage.setItem('user', JSON.stringify(data));
      }else{
        this.toastService.show({
          icon: "error",
          title: "Usuario o contraseña incorrectos"
        });
        this.loading = false;
      }
      
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
Register(){
  if(this.checked === true){
    if(this.AdminFormPassword === this.AdminPassword){
      this.TypeUser = 'ADMIN';
      if(this.PasswordRegister == this.PasswordConfirmRegister){
        this.loading = true;
      
        const data = {
          name: this.NameRegister,
          lastname: this.LastNameRegister,
          username: this.UserNameRegister,
          type: this.TypeUser,
          sex: this.selectedSexoRegister,
          age: this.ageRegister,
          password: this.PasswordRegister
        };
    
        this.authService.register(data).subscribe(
          (data: any) => {
            console.log("data sin json:",data);
            console.log("data enviada:", JSON.stringify(data));
            
            if(data != undefined){
              Swal.fire({
                icon: 'success',
                title: 'Usuario registrado',
                text: 'Ahora puedes iniciar sesión',
                confirmButtonText: 'Aceptar'  // Esto agrega el botón
              }).then((result) => {
                if (result.value) {
                  window.location.reload();  // Recarga la página cuando se presione el botón
                }
              });
              
    
              this.loading = false;
              
            }else{
              this.toastService.show({
                icon: "error",
                title: "Error al registrarse"
              });
              this.loading = false;
            }
            
          },
          (error) => {
            console.log(error);
            this.toastService.show({
              icon: "error",
              title: "Error al registrarse"
            });
            this.loading = false;
          }
        );
      }else{
        this.toastService.show({
          icon: "error",
          title: "Las contraseñas no coinciden"
        });
      }
    }else{
      this.toastService.show({
        icon: "error",
        title: "Contraseña de administrador invalida"
      });
    }
  }else{
    if(this.PasswordRegister == this.PasswordConfirmRegister){
      this.loading = true;
    
      const data = {
        name: this.NameRegister,
        lastname: this.LastNameRegister,
        username: this.UserNameRegister,
        type: this.TypeUser,
        sex: this.selectedSexoRegister,
        age: this.ageRegister,
        password: this.PasswordRegister
      };
  
      this.authService.register(data).subscribe(
        (data: any) => {
          console.log("data sin json:",data);
          console.log("data enviada:", JSON.stringify(data));
          if(data != undefined){
            Swal.fire({
              icon: 'success',
              title: 'Usuario registrado',
              text: 'Ahora puedes iniciar sesión',
              confirmButtonText: 'Aceptar'  // Esto agrega el botón
            }).then((result) => {
              if (result.value) {
                window.location.reload();  // Recarga la página cuando se presione el botón
              }
            });
            
  
            this.loading = false;
            
          }else{
            this.toastService.show({
              icon: "error",
              title: "Error al registrarse"
            });
            this.loading = false;
          }
          
        },
        (error) => {
          console.log(error);
          this.toastService.show({
            icon: "error",
            title: "Error al registrarse"
          });
          this.loading = false;
        }
      );
    }else{
      this.toastService.show({
        icon: "error",
        title: "Las contraseñas no coinciden"
      });
    }
  }
  }
}
