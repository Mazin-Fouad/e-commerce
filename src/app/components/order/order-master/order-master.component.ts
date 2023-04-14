import { Component } from '@angular/core';
import { Icategory } from 'src/app/models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss'],
})
export class OrderMasterComponent {
  catList: Icategory[];
  selectedCatId: number = 0;
  recievedTotalPrice: number = 0;
  constructor() {
    this.catList = [
      { id: 1, name: 'Laptops' },
      { id: 2, name: 'Tablets' },
      { id: 3, name: 'Mobiles' },
    ];
  }

  onTotalPriceChange(totalPrice: number) {
    this.recievedTotalPrice = totalPrice;
  }
}
