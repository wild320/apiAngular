import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './componets/img/img.component';
import { ProductComponent } from './componets/product/product.component';
import { ListProductsComponent } from './componets/list-products/list-products.component';
import { NavComponent } from './componets/nav/nav.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ListProductsComponent,
    NavComponent,
    ReversePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
