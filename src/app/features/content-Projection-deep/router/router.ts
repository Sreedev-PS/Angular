import { Routes } from "@angular/router";

export const router:Routes = [
    {
        path:'',
        loadComponent:()=>import('./../pages/content-project-depth/content-project-depth').then(m=>m.ContentProjectDepth)
    }
]