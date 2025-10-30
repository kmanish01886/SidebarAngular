import { CommonModule } from '@angular/common';
import { Component, computed, Input, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import{ MatListModule }from '@angular/material/list' ;
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

export type MenuItem={
  icon:string;
  lable:string;
  route?:string;
}

@Component({
  selector: 'app-sidenav',
  standalone:true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule ],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss'
})
export class Sidenav {
  sideNavCollapsed=signal(false);
  @Input() set collapsed(val:boolean){
    this.sideNavCollapsed.set(val);
  }

  menuItems=signal<MenuItem[]>([
    {
      icon:'dashboard',
      lable:'Dashboard',
      route:'dashboard',
    },
    {
      icon:'home',
      lable:'Home',
      route:'home',
    },
    {
      icon:'dashboard2',
      lable:'Dashboard2',
      route:'dashboard2',
    },
  ]);
  
  profilePicSize=computed(()=>this.sideNavCollapsed()?'32':'100');
}
