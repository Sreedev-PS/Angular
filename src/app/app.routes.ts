import { Routes } from '@angular/router';
import { DashboardAmazone } from './features/dashboard_1/pages/dashboard-amazone/dashboard-amazone';
import { DashboardFlipkart } from './features/dashboard_2/pages/dashboard-flipkart/dashboard-flipkart';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./features/signal-component/pages/signal-dom-view/signal-dom-view').then(m => m.SignalDomView)

    },
    {
        path:'amazone-dashboard',
        component:DashboardAmazone
    },
    {
        path:'page2',
        component:DashboardFlipkart
    },
    {
        path:'directives',
        loadChildren:()=> import('./features/structural directives/router/router').then(r=>r.router)
    }
];
