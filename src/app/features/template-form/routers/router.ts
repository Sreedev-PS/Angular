import { Routes } from "@angular/router";

export const Router:Routes = [
    {
        path:'',
        loadComponent:()=>import('./../pages/templateformcomponent/templateformcomponent').then(c=>c.Templateformcomponent)
    }
]