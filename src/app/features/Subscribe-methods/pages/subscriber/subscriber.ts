import { Component, OnDestroy } from '@angular/core';
import { SubscriberService } from '../../services/subscriber';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-subscriber',
  imports: [],
  templateUrl: './subscriber.html',
  styleUrl: './subscriber.scss',
})
export class Subscriber implements OnDestroy{

  private destroy$:Subject<any> = new Subject() 
  private subscriber = new Subscription()

  constructor(
    private subscribeService:SubscriberService
  ){}

  getdata(){
    let getdataApicall = this.subscribeService.getMyData().pipe(takeUntil(this.destroy$)).subscribe(
      {
        next:()=>{},
        error:()=>{},
        complete:()=>{}
      }
    )
    this.subscriber.add(getdataApicall)
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
    this.destroy$.next(null),
    this.destroy$.complete()
  }
}
