import { Routes } from "@angular/router";

export const router:Routes = [
    {
        path:'',
        loadComponent:()=>import('./../pages/structural-directive/structural-directive').then(m=>m.StructuralDirective)
    }
]