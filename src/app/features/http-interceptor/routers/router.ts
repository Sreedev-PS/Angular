import { Routes } from "@angular/router";

export const router:Routes = [
    {
        path:'',
        loadComponent:()=>import('./../pages/interceptor-component/interceptor-component').then(c=>c.InterceptorComponent)
    }
]