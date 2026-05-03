import { Injectable, signal } from "@angular/core";


@Injectable({
    providedIn:'root'
})

export class signalService{


    count = signal(0);

    increment(){
        this.count.update(count => count + 1);
    }
}