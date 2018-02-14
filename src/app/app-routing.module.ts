import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent }   from '../supplier/supplier.component';
import { AddSupplierComponent } from '../supplier/supplierAdd.component';
import { EditSupplierComponent} from '../supplier/supplierEdit.component';
import { UserComponent } from '../user/user.component';
import {AddUserComponent} from '../user/userAdd.component';
import {EditUserComponent} from '../user/userEdit.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SupplierComponent },
  { path: 'suppliers', component: SupplierComponent },
  { path: 'users', component: UserComponent },
  { path: 'suppliers/Add', component:AddSupplierComponent},
  { path: 'suppliers/Edit/:supplierId', 
    component:EditSupplierComponent
  },
  {path:'users/Add', component:AddUserComponent},
  { path: 'users/Edit/:userId', component:EditUserComponent},
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

