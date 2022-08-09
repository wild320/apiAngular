import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.models';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  total=0;
  myShoppingCart: Product[]=[];
  products: Product[] = [
    {
      id: '1',
      name: 'Bicileta',
      image: './assets/imagenes/bike.jpg',
      price: 100
    },
    {
      id: '2',
      name: 'Glases',
      image: './assets/imagenes/glasses.jpg',
      price: 120
    },
    {
      id: '3',
      name: 'Libro',
      image: './assets/imagenes/books.jpg',
      price: 85
    },
    {
      id: '4',
      name: 'Toy',
      image: './assets/imagenes/toy.jpg',
      price: 90
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onAddToShoppingCart(product: Product) {
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum, item) =>sum + item.price, 0)
    
  }

}
