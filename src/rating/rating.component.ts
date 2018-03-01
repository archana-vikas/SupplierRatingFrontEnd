import {Component,Input} from "@angular/core";
import {IRating} from "./Irating";
import {RatingService} from './rating.service';
import {OnInit} from "@angular/core/src/metadata/lifecycle_hooks";
import { Icategory } from "./Icategory";
import { Observable } from "rxjs/Observable";
@Component({
    selector:'rm-rating',
    templateUrl:'./rating.component.html',
})
export class RatingComponent implements OnInit{
    pageTitle: string='Rating for Supplier';
    newRatings:IRating[]=[];
    errorMessage: string;
    result: Boolean;
    aRating:IRating;
    
    constructor(private _ratingService:RatingService)
    {

    }

    ngOnInit():void
    {
        
        this._ratingService.getCategoriesByRoleId()
            .subscribe(
                categories=>{
                    console.log('Allx:'+ JSON.stringify(categories));
                    //use the categories to create new ratings
                    categories.forEach(category=> {
                        this.aRating =  {
                            RatingId:null,
                            SupplierId:null,
                            CategoryId:category.CategoryId,
                            RatedOn:null,
                            RatedByUserId:1,
                            RatingValue:null, 
                            category:category}
                        this.newRatings.push(this.aRating);
                        console.log('Rating Created for Category:'+ category.CategoryName);            
                    });

                },
                error=>this.errorMessage=<any>error
            ); 
     
    }


}
