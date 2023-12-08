import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { ImportDataService } from '../services/import-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  productData: any;
  constructor(private router: Router,private userData: ImportDataService) {
    userData.productDetails().subscribe((data) => {
      this.productData = data;
      console.log(this.productData);
    });
  }
  // constructor() {}

  navigateToBigCard(id: number): void {
    this.router.navigate(['/app-cart', id]);
  }
}
