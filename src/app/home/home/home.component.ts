import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dark: boolean;
  boxed: boolean;
  collapseSidebar = false;
  compactSidebar = false;
  constructor() { }

  ngOnInit() {
  }

}
