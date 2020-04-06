import { Component, OnInit } from '@angular/core';
import {Menu} from '../menu.class';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  menus:Menu[]=[
    new Menu('Users','/users/list','The User List Page'),
    new Menu('Products','/products/list','The Product List Page'),
    new Menu('Vendors','/vendors/list','The Vendor List Page'),
    new Menu('Requests','/requests/list','The Request List Page')
  ];
  constructor() { }
  ngOnInit(): void {
  }

}
