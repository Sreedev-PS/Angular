import { Routes } from "@angular/router";

export const router:Routes = [
    {
        path:'',
        loadComponent:()=>import('./../pages/binding-litsener/binding-litsener').then(c=>c.BindingLitsener)
    }
]