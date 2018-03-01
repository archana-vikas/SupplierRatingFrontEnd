import {Icategory} from "./Icategory";
export interface IRating{
    RatingId: number;
    SupplierId: number;
    RatedOn: Date;
    RatedByUserId: number;
    CategoryId: number;
    category:Icategory;
    RatingValue: number;
}

