import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { CommonModule } from '@angular/common';
import{ MatButtonModule } from '@angular/material/button';
import{ MatIconModule } from '@angular/material/icon';
import{ MatSidenavModule } from '@angular/material/sidenav'
import { Sidenav } from "../layout/sidenav/sidenav";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, MatToolbarModule, CommonModule, MatButtonModule, MatIconModule, MatSidenavModule,
     Sidenav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  collapsed=signal(false);
  sidenavWidth=computed(()=>this.collapsed()?'65px':'250px');
  
}
