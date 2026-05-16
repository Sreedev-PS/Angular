import { Injectable, signal } from "@angular/core";

@Injectable(
    {
        providedIn:'root'
    }
)
export class guardService {

    isLoggedUser = signal<boolean>(false)

    setValue(value:boolean){
        this.isLoggedUser.set(value)
    }
}