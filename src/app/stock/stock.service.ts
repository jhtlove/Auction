import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stocks: Stock[] = [
    new Stock(1, '第一支股票', 1.99, 3.5, '这是第一只股票', ['IT', '金融']),
    new Stock(2, '第二支股票', 2.99, 3.5, '这是第二只股票', ['IT', '金融']),
    new Stock(3, '第三支股票', 3.99, 4.5, '这是第三只股票', ['IT', '金融']),
    new Stock(4, '第四支股票', 4.99, 3.5, '这是第四只股票', ['IT', '互联网', '通信']),
    new Stock(5, '第五支股票', 5.99, 2.5, '这是第五只股票', ['教育']),
    new Stock(6, '第六支股票', 6.99, 1.5, '这是第六只股票', ['IT', '金融']),
    new Stock(7, '第七支股票', 7.99, 5.0, '这是第七只股票', ['IT', '金融']),
    new Stock(8, '第八支股票', 8.99, 3.5, '这是第八只股票', ['IT', '金融'])
  ];
  constructor() { }

  getStocks(): Stock[] {
    return this.stocks;
  }

  getStock(id: number): Stock {
    let stock = this.stocks.find(s => s.id === id);
    if (!stock) {
      stock = new Stock(id, '', 0, 0, '', []);
    }
    return stock;
  }
}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
    // public categories: string[]
  ) {

  }
}
