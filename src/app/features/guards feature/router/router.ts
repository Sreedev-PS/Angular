import { Routes } from "@angular/router";
import { CanActivateGuard } from "../guards/canActivateGuard";
import { childActivate } from "../guards/canActivateChildGuard";
import { DeactivateGuard } from "../guards/canDecativateGuard";

export const Router: Routes = [
    {
        path: '',
        loadComponent: () => import('./../pages/guard-component/guard-component').then(c => c.GuardComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./../components/can-activatecomponent/can-activatecomponent').then(c => c.CanActivatecomponent),
                canActivate: [CanActivateGuard],
                canDeactivate:[DeactivateGuard]
            },
            {
                path: 'unAuthorized',
                loadComponent: () => import('./../components/not-allowed/not-allowed').then(c => c.NotAllowed)
            },
            {
                path: 'unAuthorizedChild',
                loadComponent: () => import('./../components/not-allow-child-component/not-allow-child-component').then(c => c.NotAllowChildComponent)
            }
        ]
    },
    {
        path: 'canactivateChild',
        loadComponent: () => import('./../pages/guard-component/guard-component').then(c => c.GuardComponent),
        canActivateChild: [childActivate],
        children: [
            {
                path: '',
                loadComponent: () => import('./../components/can-activated-child-component/can-activated-child-component').then(c => c.CanActivatedChildComponent)
            }
        ]
    }

]