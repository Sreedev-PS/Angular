import { Routes } from "@angular/router";

export const testRouter:Routes = [
    {
        path:'',
        loadComponent:()=>import('./../pages/testcase/testcase').then(c=>c.Testcase)
    }
]