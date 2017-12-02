import { ProductService } from './products/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <div><h1>{{title}}</h1>
    <pm-products></pm-products>
  </div>
  `,
  providers: [ProductService]
})

export class AppComponent {
  title = 'Angular: Getting Started';
}
