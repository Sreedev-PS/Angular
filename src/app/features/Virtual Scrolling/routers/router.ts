import { Routes } from "@angular/router";

export const router:Routes = [
    {
        path:'',
        loadComponent:()=>import('./../pages/virtual-scroll/virtual-scroll').then(m=>m.VirtualScroll)

    }
]