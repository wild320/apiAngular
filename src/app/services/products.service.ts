import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse,HttpStatusCode} from '@angular/common/http';
import { Product,createProductDto, UpdateProductDTO } from '../models/product.models';

import { retry,catchError,map } from 'rxjs/operators';
import { throwError, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(
    private http: HttpClient
  ) { }
  getAllProducts(limit?:number, offset?:number){
    let params = new HttpParams();
    if(limit && offset) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(this.apiUrl, {params})
    .pipe(
      retry(2),
      map(products => products.map(item =>{
        return{
          ...item,
          taxes: .19 * item.price,
        }
      }))
    );
  }

  fetchReadAndUpdate(id:string, dto: UpdateProductDTO){
    return zip(      
      this.getProduct(id),
      this.updateProduct(id, dto)
      )
  }

  getProduct(id:string){
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status == HttpStatusCode.Conflict){
          return throwError("FALLA DEL SEFVIDOR");
        }
        if(error.status == HttpStatusCode.NotFound){
          return throwError("No exite el Produtoo");
        }
        if(error.status == HttpStatusCode.Unauthorized){
          return throwError("No TIENES AUTORIZACION");
        }
        return throwError("FALLA DEL SEFVIDOR");
      })
    );
  }
  getProductsByPage(limit:number, offset:number){    
    return this.http.get<Product[]>(`${this.apiUrl}`,{
      params: {limit:limit, offset:offset},
    });
  }

  create(dto:createProductDto){    
    return this.http.post<Product>(this.apiUrl,dto);
  }
  
  updateProduct(id: string, dto: UpdateProductDTO){
    return this.http.put<Product>(`${this.apiUrl}/${id}`,dto);
    
  }
  delete(id: string){
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);    
  }
}
