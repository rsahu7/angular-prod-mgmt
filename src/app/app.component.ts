import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:`
  <div><h1>{{pageTitle}}</h1>
    <pm-product-lists></pm-product-lists>
  </div>
    `
})

export class AppComponent {
  pageTitle: string = "Product Management App";
}