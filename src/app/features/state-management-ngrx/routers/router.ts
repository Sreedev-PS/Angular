import { Routes } from "@angular/router";

export const router:Routes = [
    {
        path:'',
        loadComponent:()=>import('./../pages/ngrx-component/ngrx-component').then(c=>c.NgrxComponent)
    }
]