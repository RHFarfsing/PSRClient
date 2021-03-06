import { User } from '../user/user.class';
import { RequestLine } from '../requestLine/request-line.class';

export class Request {
    id:number=0;
    description:string="";
    justification:string="";
    rejectionReason:string="";
    deliveryMode:string="Pickup";
    status:string="New";
    total:number=0;
    userId:number=0;
    user: User=null;
    requestLines:RequestLine[];    
}
