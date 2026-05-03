import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./features/signal-component/pages/signal-dom-view/signal-dom-view').then(m => m.SignalDomView)
    }
];
