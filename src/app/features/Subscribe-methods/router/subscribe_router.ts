import { Routes } from "@angular/router";

export const suscribeRouter:Routes = [
    {
        path:'',
        loadComponent:()=>import('./../pages/subscriber/subscriber').then(c=>c.Subscriber)
    }
]