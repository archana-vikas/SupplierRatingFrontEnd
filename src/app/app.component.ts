import { Component } from '@angular/core';
import { SupplierService } from '../supplier/supplier.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [SupplierService, UserService]
})
export class AppComponent {
  title = 'Supplier Ratings';
}
