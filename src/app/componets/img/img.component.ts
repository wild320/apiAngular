import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img:string = '';
  @Input('img') 
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('changes just img =>',this.img);
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefault = './assets/imagenes/ima.jpg';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    // antes del render
    // No asincrono -- una sola vez
    console.log('Constructor', 'imgValue =>', this.img);

  }
  ngOnChanges(changes: SimpleChanges) {
    // antes y durante del render
    // cambios inputs -- todo el tiempo
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes',changes);

  }

  ngOnInit(): void {
    // antes del render
    // async - fetch -- una sola vez    
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(() =>{
    //   this.counter += 1;
    //   console.log('run counter');
    // },1000)
  }
  ngAfterViewInit() {
    // despues del render
    // manejamos los hijos
    console.log('ngAfterViewInit');

  }
  ngOnDestroy() {
    // ELIMINA COMPONENTE    
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imgDefault
  }

  imgLoaded() {
    console.log('Log hijo');
    this.loaded.emit(this.img);
  }

}
