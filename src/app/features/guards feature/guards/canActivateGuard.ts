import { effect, inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { guardService } from "../services/guardservice";

export const CanActivateGuard:CanActivateFn = (component)=>{
    const router = inject(Router);
    const isLoggedUser = inject(guardService)
    


    if(isLoggedUser.isLoggedUser()){
        return true
    }else{
        return router.parseUrl('guard/unAuthorized')
    }
    
}