import { Component } from '@angular/core';
import { StoreData } from 'src/app/viewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  storeInfo: StoreData;
  isImageShown: boolean = true;

  constructor() {
    this.storeInfo = new StoreData(
      'My Store',
      'https://picsum.photos/seed/picsum/600/300',
      ['Karlsruhe ', 'Bruchsal ', 'Heidlberg']
    );
  }

  toggleImage() {
    this.isImageShown = !this.isImageShown;
  }
}
