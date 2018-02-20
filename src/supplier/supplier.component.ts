import { Component, OnInit,Input } from "@angular/core";
import{SupplierService} from "./supplier.service";
import{Observable} from "rxjs/Observable";
import { ISupplier } from "./ISupplier";
import { Router } from '@angular/router';

@Component({
    selector:'rm-suppliers',
    templateUrl:'./supplier.component.html',
    styleUrls:['./supplier.component.css']
})
export class SupplierComponent implements OnInit{
    pageTitle: string ='Supplier List';
    @Input() suppliers: ISupplier[]=[];//[{"SupplierId":1,"SupplierName":"tcs","Service":"Project Management","Rating":"3"}];
    errorMessage: string;
    result: Boolean;
    
    constructor(private _supplierService:SupplierService, private router:Router)
    {

    }
    
ngOnInit():void{
     //this.suppliers.push ({"SupplierId":1,"SupplierName":"txcs","Service":"Project Management","Rating":"3"}) 
     this._supplierService.getSuppliers()
            .subscribe(suppliers=>{
                this.suppliers=suppliers;
                console.log('All:' + JSON.stringify(this.suppliers));
            },
            error=>this.errorMessage=<any>error);    
        }


   //Service to delete data//
   deleteSupplier(supplier: ISupplier):void{
    this._supplierService.deleteSupplier(supplier)
        .subscribe(result=>{
                this.result=result;
                console.log('Result of Delete:' + JSON.stringify(this.result));
                console.log('Count before Delete:' + this.suppliers.length);                
                if(result){
                    this.suppliers = this.suppliers.filter(s => s.SupplierId !== supplier.SupplierId);  
                }
                console.log('Count after Delete:' + this.suppliers.length);
                
        },
        error=>this.errorMessage=<any>error); 

    }

    editSupplier(supplier: ISupplier):void{
        this.router.navigate(['suppliers/Edit', supplier.SupplierId]);
    }


}
