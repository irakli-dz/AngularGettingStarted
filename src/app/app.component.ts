import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
<<<<<<< HEAD
  styleUrls: ['./app.component.css'],
  template: `
  <div><h1>{{title}}</h1>
    <pm-products></pm-products>
  </div>
  `

=======
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
>>>>>>> d968d01d6448752570b52430ead942483fcee1a1
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
