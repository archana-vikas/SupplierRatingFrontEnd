import { Component } from '@angular/core';
import { SupplierService } from '../supplier/supplier.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <div>
  <rm-suppliers></rm-suppliers>
  </div>`
  ,
  
  // styleUrls: ['./app.component.css'],
   providers: [SupplierService]
})
export class AppComponent {
  title = 'Rating App';
}
