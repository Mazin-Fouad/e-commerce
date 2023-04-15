import { Component } from '@angular/core';
import { Icategory } from 'src/app/models/icategory';
import { CartView } from 'src/app/viewModels/cart-view';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss'],
})
export class OrderMasterComponent {
  catList: Icategory[];
  selectedCatId: number = 0;
  recievedTotalPrice: number = 0;
  orderArray: CartView[] = [];
  constructor() {
    this.catList = [
      { id: 1, name: 'Laptops' },
      { id: 2, name: 'Tablets' },
      { id: 3, name: 'Mobiles' },
    ];
  }

  onTotalPriceChange(orderData: CartView) {
    this.orderArray.push(orderData);
    let total: number = 0;
    total += orderData.productPrice * orderData.productCount;
  }

  removeOrder(i: number) {
    this.orderArray.splice(i, 1);
  }

  getTotalPrice() {
    let finalPrice = 0;
    for (let order of this.orderArray) {
      finalPrice += order.productPrice * order.productCount;
    }
    return finalPrice;
  }
}
