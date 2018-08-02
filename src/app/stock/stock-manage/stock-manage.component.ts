import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService, Stock } from '../stock.service';
import { FormControl } from '@angular/forms';
// import { fromEvent, Subject } from 'rxjs';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks: Stock[];
  private nameFilter: FormControl = new FormControl(); // valueChanges 可观察对象 发射值
  private keyword: string;
  private field = 'name';



  constructor(private router: Router, private stockService: StockService) { }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();

    this.nameFilter.valueChanges.subscribe(v => this.keyword = v);
  }

  create() {
    this.router.navigateByUrl('stock/0');
  }

  update(stock: Stock) {
    this.router.navigateByUrl(`stock/${stock.id}`);
  }

  search() {

  }
}


