import { Vendor } from '../vendor/vendor.class';
import { RequestLine } from '../requestLine/request-line.class';

export class Product {
    id:number=0;
    partNbr:string='';
    name:string='';
    price:number=0;
    unit:string='';
    vendorId:number=0;
    vendor:Vendor=null;
    requestLines:RequestLine[]=[];

}
