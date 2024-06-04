import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private readonly URLAPI = "https://sentemail-api-rest.onrender.com"

  constructor(private httpClient: HttpClient) { }


 //servicio enviar email
  sendEmail$(
    name:string,
    email:string,
    phone:string,
    subject:string,
    message:string
  ):Observable<any>{
       
    const body = {name,email,phone,subject,message}
            return  this.httpClient.post(`${this.URLAPI}/send`,body );
    
    }


}
