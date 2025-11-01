import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../sidenav/sidenav';

@Component({
  selector: 'app-menu-items',
  imports: [MatListModule,RouterModule,MatIcon],
  templateUrl: './menu-items.html',
  styleUrl: './menu-items.scss'
})
export class MenuItems {
  item=input.required<MenuItem>();
  collapsed=input(false);
}
