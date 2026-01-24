import { Routes } from "@angular/router";

export const eventBinder:Routes = [
    {
        path:'',
        loadComponent:()=>import('../pages/eventhandlercomponent/eventhandlercomponent').then(c=>c.Eventhandlercomponent)
    },
]