import { Routes } from '@angular/router';
import { DashboardAmazone } from './features/dashboard_1/pages/dashboard-amazone/dashboard-amazone';
import { DashboardFlipkart } from './features/dashboard_2/pages/dashboard-flipkart/dashboard-flipkart';

export const routes: Routes = [

    {
        path:'',
        component:DashboardAmazone
    },
    {
        path:'page2',
        component:DashboardFlipkart
    }
];
