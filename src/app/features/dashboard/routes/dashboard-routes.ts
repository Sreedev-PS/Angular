import { Routes } from "@angular/router";

export const DashboardRouter:Routes = [
    {
        path:'',
        loadComponent:()=>import('./../pages/dashboard/dashboard').then(m=>m.Dashboard)
    }
]