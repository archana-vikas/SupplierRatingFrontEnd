import { Component } from '@angular/core';
import { SupplierService } from '../supplier/supplier.service';
import { UserService } from '../user/user.service';
import {RatingService} from '../rating/rating.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [SupplierService, UserService, RatingService]
})
export class AppComponent {
  title = 'Supplier Ratings';
}
