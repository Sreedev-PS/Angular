import { Routes } from "@angular/router";


export const router:Routes =[
    {
        path:'',
        loadComponent:()=>import('./../pages/att-compo/att-compo').then(m=>m.AttCompo)
    }
]