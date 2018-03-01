import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent }   from '../supplier/supplier.component';
import { AddSupplierComponent } from '../supplier/supplierAdd.component';
import { EditSupplierComponent} from '../supplier/supplierEdit.component';
import { UserComponent } from '../user/user.component';
import {AddUserComponent} from '../user/userAdd.component';
import {EditUserComponent} from '../user/userEdit.component';
import {SupplierListComponent} from '../MainPage/supplierList.component';
import { RatingComponent } from '../rating/rating.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SupplierListComponent  },
  { path: 'suppliers', component: SupplierComponent },
  { path: 'users', component: UserComponent },
  { path: 'suppliers/Add', component:AddSupplierComponent},
  { path: 'suppliers/Edit/:supplierId', 
    component:EditSupplierComponent
  },
  {path:'users/Add', component:AddUserComponent},
  { path: 'users/Edit/:userId', component:EditUserComponent},
  {path:'rating',component:RatingComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

