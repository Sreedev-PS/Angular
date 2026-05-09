import { Routes } from "@angular/router";

export const router:Routes = [
    {
        path:'',
        loadComponent:()=>import('./../pages/h-lb-att-directive/h-lb-att-directive').then(c=>c.HLbAttDirectives)
    }
]