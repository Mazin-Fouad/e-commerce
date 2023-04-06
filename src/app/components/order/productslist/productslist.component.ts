import { Component } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.scss'],
})
export class ProductslistComponent {
  prdList: Iproduct[];
  constructor() {
    this.prdList = [
      {
        id: 100,
        name: 'Lenovo Thinkpad',
        price: 100,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/200x200/',
        categoryID: 1,
      },
      {
        id: 200,
        name: 'Apple MacBook',
        price: 200,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/200x200/',
        categoryID: 1,
      },
      {
        id: 300,
        name: 'Lenovo Tab 2',
        price: 300,
        quantity: 10,
        imgURL: 'https://fakeimg.pl/200x200/',
        categoryID: 2,
      },
      {
        id: 400,
        name: 'Samsung Tab',
        price: 400,
        quantity: 2,
        imgURL: 'https://fakeimg.pl/200x200/',
        categoryID: 2,
      },
      {
        id: 500,
        name: 'Samsung Note 10',
        price: 500,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/200x200/',
        categoryID: 3,
      },
      {
        id: 600,
        name: 'Samsung S22 Ultra',
        price: 600,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/200x200/',
        categoryID: 3,
      },
    ];
  }
}
