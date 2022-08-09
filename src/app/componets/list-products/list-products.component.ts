import { Component, OnInit } from '@angular/core';

import {createProductDto, Product, UpdateProductDTO} from '../../models/product.models';

import { StoreService} from '../../services/store.service';
import { ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  total=0;  
  myShoppingCart: Product[] = [];
  products: Product[] = [];
  showProductDetail = false;
  productChoosen: Product = {
    id:'',
    price:0,
    images:[],
    title:'',
    description:'',
    category:{
      id:0,
      name:'',
    }
  }
  limit = 10;
  offset = 0;

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this .storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getProductsByPage(10,0)
    .subscribe(data =>{
      this.products = data;   
    })
  }
  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
    
  }

  toggleShowProductDetail(){
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id:string){
    this.productsService.getProduct(id)
    .subscribe(data=>{
      this.toggleShowProductDetail();
      this.productChoosen = data;
    })
  }
  
  createNewProduct(){
    const product: createProductDto ={
      title: 'Bike prueba',
      description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDbvW8sO8BIsC2GmBdB-Fhzut5m7eKKvA0Q&usqp=CAU'],
      price: 950,
      categoryId: 2,
    }
    this.productsService.create(product)
    .subscribe((data: any) =>{
      this.products.unshift(data);
    })
  }
  updateProduct(){
    const changes: UpdateProductDTO ={
      title: "Nuevo Title"
    }
    const id = this.productChoosen.id;
    this.productsService.updateProduct(id,changes)
    .subscribe(data =>{
      const productIndex = this.products.findIndex(item => item.id === this.productChoosen.id);
      this.products[productIndex] = data;
    })
  }
  deleteProduct() {    
    const id = this.productChoosen.id;
    this.productsService.delete(id)
    .subscribe(()=> {
      const productIndex = this.products.findIndex(item => item.id === this.productChoosen.id);
      this.products.splice(productIndex, 1);
      this.showProductDetail = false;
    })

  }
  loadMore(){
    this.productsService.getProductsByPage(this.limit,this.offset)
    .subscribe(data =>{
      this.products = this.products.concat(data);   
      this.offset += this.limit;
    })
  }


}
