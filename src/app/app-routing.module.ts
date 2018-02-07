import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent }   from '../supplier/supplier.component';
import { AddSupplierComponent } from '../supplier/supplierAdd.component';
import { EditSupplierComponent} from '../supplier/supplierEdit.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SupplierComponent },
  { path: 'suppliers', component: SupplierComponent },
  { path: 'users', component: SupplierComponent },
  {path:'suppliers/Add',component:AddSupplierComponent},
  {path:'suppliers/Edit',component:EditSupplierComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

