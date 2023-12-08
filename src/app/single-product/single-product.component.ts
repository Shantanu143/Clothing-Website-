import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportDataService } from '../services/import-data.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent {
  
userId : any ; 
productData: any;
constructor(private route : ActivatedRoute , private userData: ImportDataService) {
  
  userData.productDetails().subscribe((data) => {
    this.productData = data;
    console.log(this.productData);
  });
}

ngOnInit():void {
  this.userId = this.route.snapshot.paramMap.get('id');
  console.log(this.userId);
}

}
