import { inject } from "@angular/core";
import { CanActivateChildFn, Router, UrlTree } from "@angular/router";
import { guardService } from "../services/guardservice";

export const childActivate:CanActivateChildFn = (component)=>{
    const router = inject(Router);
    const service = inject(guardService)

    if(service.isLoggedUser()){
        return true
    }else{
        return router.parseUrl('guard/unAuthorizedChild')
    }
}