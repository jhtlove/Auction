import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Array<Menu>;
  currentMenuId: number;
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.menus = [
      new Menu(1, '首页', 'dashboard'),
      new Menu(2, '股票管理', 'stock')
    ];
  }

  nav(menu: Menu) {
    // this.router.navigate([url]);
    this.router.navigateByUrl(menu.link);
    this.currentMenuId = menu.id;
  }
}

// 类 封装信息
export class Menu {
  constructor(public id: number,
    public name: string,
    public link: string) {

  }
}