import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

import { filter } from 'rxjs/operators';
// import {from} from "rxjs";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

// const source = from([1, 2, 3, 4, 5]);
// //filter out non-even numbers
// const example = source.pipe(filter(num  => num % 2 == 0));
// //output: "Even number: 2", "Even number: 4"
// const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));

export class ContentComponent implements OnInit {

  pageTitle = '';
  pageDesc = '';


  constructor(public router: Router) {

  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.url === '/dashboard') {
        this.pageTitle = '这里是首页';
        this.pageDesc = '';
      } else if (event.url.startsWith('/stock')) {
        this.pageTitle = '股票信息管理';
        this.pageDesc = '进行股票信息基本增删改查';
      }
    });

    //
    // this.router.events.subscribe((event:NavigationEnd)=>{
    //   if(event.url.toString().startsWith('dashboard')){
    //
    //   }else if(event.url.toString().startsWith('')){
    //
    //   }
    // })

  }

}
