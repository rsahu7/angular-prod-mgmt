import {Component, OnInit} from '@angular/core';
import {IProduct} from './product'
import {ProductService} from './product.service';

@Component({
    selector: 'pm-product-lists',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']

})

export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List page ";
    showImage: boolean = false;
    _filterString: string;
    filteredProducts: IProduct[];
    products: IProduct[];
    errorMessage: string;

  constructor(private productService: ProductService) {

  }

    get filterString() : string {
      return this._filterString;
    }

    set filterString(value:string) {
      this._filterString = value;
      this.filteredProducts = this._filterString ? this.performFilter(this._filterString) : this.products;
    }


    

     toggleImage(): void {
        this.showImage = !this.showImage;
     }

     ngOnInit() : void {
      this.productService.getProducts().subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
        
      });      
      this.filterString = '';
     }

     performFilter(filterString: string) : IProduct[] {
      filterString = filterString.toLocaleLowerCase();
      return this.products.filter((product:IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterString) !== -1
      );
     }

     onRatingClicked(message: string) : void {
       this.pageTitle = 'Product List : ' + message;
     }
}