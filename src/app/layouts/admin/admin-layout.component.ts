import { Component, NgZone, OnInit, OnDestroy, ViewChild, HostListener, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
    selector: 'app-layout',
    templateUrl: './admin-layout.component.html',
    styles: ['.notification-desc {white-space: pre-wrap !important;}']
  })
  export class AdminLayoutComponent implements OnInit, OnDestroy{
      ngOnInit():void{

      }
      ngOnDestroy():void{
          
      }
  }