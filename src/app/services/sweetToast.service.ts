import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class SweetToastService {

  private Toast = Swal.mixin({
    toast: true,
    position: 'top-end', // Posición por defecto
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

constructor() { }

show({ title = '', icon = 'success', position = 'top-end' }: { title: string; icon: 'success' | 'error' | 'warning' | 'info' | 'question'; position?: 'top' | 'top-start' | 'top-end' | 'center' | 'center-start' | 'center-end' | 'bottom' | 'bottom-start' | 'bottom-end' }) {
  this.Toast.fire({
    icon,
    title,
    position
  });
}

}
