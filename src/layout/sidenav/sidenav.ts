import { CommonModule } from '@angular/common';
import { Component, computed, Input, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import{ MatListModule }from '@angular/material/list' ;
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { MenuItems } from "../menu-items/menu-items";

export type MenuItem={
  icon:string;
  lable:string;
  route?:string;
  subItems?:MenuItem[];
}

@Component({
  selector: 'app-sidenav',
  standalone:true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule, MenuItems],
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
      icon:'video-library',
      lable:'Content',
      route:'content',
      subItems:[
        {
          icon:'play-circle',
          lable:'Videos',
          route:'videos',
        },
        {
          icon:'playlist_play',
          lable:'PlayLists',
          route:'playlists',
        },
      ]
    },
  ]);
  
  profilePicSize=computed(()=>this.sideNavCollapsed()?'32':'100');
}
