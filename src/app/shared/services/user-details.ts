import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class UserDetailsService {
 userDetails:BehaviorSubject<string> = new BehaviorSubject<string>('') 
 
 
 stroreUserDetails(name : string){
    this.userDetails.next(name??'user name is developer_123')
 }

 getUserDetails():Observable<string>{
    return this.userDetails.asObservable()
 }
}