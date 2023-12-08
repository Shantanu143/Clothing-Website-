import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  itemInList: any[] = [
    {
      id: 1,
      itemPrise: 400,
      itemName: ' shirt',
      shirtType: 'Cotton T-shirt',
      img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
    },
    {
      id: 2,
      itemPrise: 400,
      itemName: ' shirt',
      shirtType: 'Cotton T-shirt',
      img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
    },
    {
      id: 3,
      itemPrise: 400,
      itemName: ' shirt',
      shirtType: 'Cotton T-shirt',
      img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
    },
    {
      id: 4,
      itemPrise: 400,
      itemName: ' shirt',
      shirtType: 'Cotton T-shirt',
      img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
    },
  ];
  addTask(taskItem: string) {
    this.itemInList.push({ id: this.itemInList.length, name: taskItem });
  }
  removeTask(itemId: number) {
    this.itemInList = this.itemInList.filter(
      (taskItem) => taskItem.id !== itemId
    );
  }

  counter: number = 1;
  prise: number = 400;

  incressItems(item: string) {
    item === 'add'
      ? (this.counter++, (this.prise = this.prise + 400))
      : (this.counter--, (this.prise = this.prise - 400));
  }
}
