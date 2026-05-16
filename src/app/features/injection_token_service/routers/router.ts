import { Routes } from "@angular/router";


export const router:Routes = [
    
    {
        path:'',
        loadComponent:()=>import('./../pages/injection-token/injection-token').then(c=>c.InjectionToken)
    }
]