import { Routes } from "@angular/router";

export const Router:Routes = [
    {
        path:'',
        loadComponent:()=>import('./../pages/dynamic-component/dynamic-component').then(c=>c.DynamicComponent)
    }
]