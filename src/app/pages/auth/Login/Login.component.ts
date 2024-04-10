import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  load() {
    this.loading = true;

    setTimeout(() => {
        this.loading = false
    }, 2000);
}
  constructor() { }

  ngOnInit() {
  }

}
