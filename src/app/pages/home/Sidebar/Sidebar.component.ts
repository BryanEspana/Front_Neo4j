import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Sidebar',
  templateUrl: './Sidebar.component.html',
  styleUrls: ['./Sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  username: string = 'Bryan España';
  constructor() { }

  ngOnInit() {
  }

}
