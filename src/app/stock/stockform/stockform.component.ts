import { Stock, StockService } from './../stock.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stockform',
  templateUrl: './stockform.component.html',
  styleUrls: ['./stockform.component.css']
})
export class StockformComponent implements OnInit {


  stock: Stock;

  constructor(private router: Router, private routeInfo: ActivatedRoute, private stockService: StockService) { }

  ngOnInit() {
    const id: number = parseInt(this.routeInfo.snapshot.params['id'], 10);
    this.stock = this.stockService.getStock(id);
  }

  save() {
    this.router.navigateByUrl('stock');
  }

  cancel() {
    this.router.navigateByUrl('stock');
  }
}
