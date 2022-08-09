import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {createProductDto, Product} from '../../models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product:Product = {
    id:'',
    price:0,
    images:[],
    title:'',
    description:'',
    category:{
      id:0,
      name:'',
    }
  };
  @Output () addedProduct = new EventEmitter<Product>();
  @Output () showProduct = new EventEmitter<string>();


  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  onAddToCart(){
    this.addedProduct.emit(this.product);
  }
  onShowDetail(){
    this.showProduct.emit(this.product.id);
  }


}
