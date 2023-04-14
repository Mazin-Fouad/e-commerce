import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { retry } from 'rxjs';
import { Icategory } from 'src/app/models/icategory';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.scss'],
})
export class ProductslistComponent implements OnChanges {
  prdList: Iproduct[];
  orderTotalPrice: number = 0;
  orderDate: Date;
  @Input() sentCatId: number = 0;
  @Output() totalPriceChanged: EventEmitter<number>;
  productListOfCategory: Iproduct[] = [];

  constructor() {
    this.prdList = [
      {
        id: 100,
        name: 'Lenovo Thinkpad',
        price: 100,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/200x100/',
        categoryID: 1,
      },
      {
        id: 200,
        name: 'Apple MacBook',
        price: 200,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/200x100/',
        categoryID: 1,
      },
      {
        id: 300,
        name: 'Lenovo Tab 2',
        price: 300,
        quantity: 10,
        imgURL: 'https://fakeimg.pl/200x100/',
        categoryID: 2,
      },
      {
        id: 400,
        name: 'Samsung Tab',
        price: 400,
        quantity: 2,
        imgURL: 'https://fakeimg.pl/200x100/',
        categoryID: 2,
      },
      {
        id: 500,
        name: 'Samsung Note 10',
        price: 500,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/200x100/',
        categoryID: 3,
      },
      {
        id: 600,
        name: 'Samsung S22 Ultra',
        price: 600,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/200x100/',
        categoryID: 3,
      },
    ];

    this.orderDate = new Date();

    this.productListOfCategory = this.prdList;

    this.totalPriceChanged = new EventEmitter<number>();
  }

  ngOnChanges() {
    this.filterproductById();
  }

  buy(prdPrice: number, count: any): void {
    // this.orderTotalPrice = Number(count) * prdPrice;
    // this.orderTotalPrice = (count as number) * prdPrice;
    // this.orderTotalPrice = parseInt(count) * prdPrice;

    this.orderTotalPrice += +count * prdPrice;
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }

  // getSelectedCat(value: any) {
  //   console.log(value);
  // }

  // changeCat() {
  //   this.selectedCatId = 1;
  // }

  private filterproductById() {
    if (this.sentCatId === 0) {
      this.productListOfCategory = this.prdList;
    } else {
      this.productListOfCategory = this.prdList.filter(
        (prd) => prd.categoryID == this.sentCatId
      );
    }

    console.log(this.productListOfCategory);
  }

  trackByFn(index: number, prd: Iproduct) {
    return prd.id;
  }
}
