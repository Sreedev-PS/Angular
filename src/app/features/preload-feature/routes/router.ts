import { Routes } from "@angular/router";

export const router:Routes = [
    {
        path:'',
        loadComponent:()=>import('./../pages/preload/preload').then(c=>c.Preload),
        data:{
            preload:true
        }
    }
]