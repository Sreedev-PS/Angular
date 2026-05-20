import { Routes } from "@angular/router";

export const router:Routes = [{
    path:'',
    loadComponent:()=>import('./../pages/content-project/content-project').then(c=>c.ContentProject)
}]