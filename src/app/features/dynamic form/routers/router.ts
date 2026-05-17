import { Routes } from "@angular/router";

export const Router:Routes=[
    {
        path:'',
        loadComponent:()=>import('./../pages/dynamicformcomponent/dynamicformcomponent').then(c=>c.Dynamicformcomponent)
    }
]