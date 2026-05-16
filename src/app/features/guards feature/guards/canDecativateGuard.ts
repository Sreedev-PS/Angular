import { CanDeactivateFn } from "@angular/router";


export const DeactivateGuard:CanDeactivateFn<boolean> = (component:any)=>{
    
    if(component.Test()==false){
        alert('not allowed routing')
    }

    return component.Test()
}