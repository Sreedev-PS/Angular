import { Routes } from "@angular/router";

export const router:Routes = [
    {
        path: '',
        loadComponent:()=>import('./../pages/customepipe/customepipe').then(c=>c.Customepipe)
    }
]