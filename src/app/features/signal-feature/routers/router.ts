import { Routes } from "@angular/router";

export const router:Routes = [
    {
        path:'',
        loadComponent:()=>import('./../pages/signal-communication/signal-communication').then(c=>c.SignalCommunication)
    }
]