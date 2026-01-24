import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscriberService {
  
  constructor(){}

  getMyData():Observable<string[]>{
    let data:string[] = ['hello']
    return of(data)
  }

}
