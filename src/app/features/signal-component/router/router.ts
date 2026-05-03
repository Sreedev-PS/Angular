import { Routes } from "@angular/router";

export const signalRouter:Routes = [
    {
        path:'',
        loadComponent:()=>import('./../pages/signal-dom-view/signal-dom-view').then(m=>m.SignalDomView)
    }
]