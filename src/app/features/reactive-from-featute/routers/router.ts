import { Routes } from "@angular/router";

export const Router:Routes = [
    {
        path:'',
        loadComponent:()=>import('./../pages/reactiveform-component/reactiveform-component').then(c=>c.ReactiveformComponent)
    }
]