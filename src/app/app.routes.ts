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
    },
    {
        path:'attr-directive',
        loadChildren:()=>import('./features/Attribute directive/router/router').then(r=>r.router)
    },
    {
        path:'hLBAD',
        loadChildren:()=>import('./features/Host-LB-att-dircetive/routers/router').then(r=>r.router)
    },
    {
        path:'pipes',
        loadChildren:()=>import('./features/pipes-featutre/router/router').then(r=>r.router)
    },
    {
        path:'injection-token',
        loadChildren:()=>import('./features/injection_token_service/routers/router').then(r=>r.router)
    },
    {
        path:'router',
        loadChildren:()=>import('./features/Router-feature/routers/router').then(r=>r.Router)
    },
    {
        path:'guard',
        loadChildren:()=>import('./features/guards feature/router/router').then(r=>r.Router)
    },
    {
        path:'preload',
        loadChildren:()=>import('./features/preload-feature/routes/router').then(r=>r.router)
    },
    {
        path:'form/template',
        loadChildren:()=>import('./features/template-form/routers/router').then(r=>r.Router)
    },
    {
        path:'form/reactive',
        loadChildren:()=>import('./features/reactive-from-featute/routers/router').then(r=>r.Router)
    },
    {
        path:'form/dynamic',
        loadChildren:()=>import('./features/dynamic form/routers/router').then(r=>r.Router)
    },
    {
        path:'interceptor',
        loadChildren:()=>import('./features/http-interceptor/routers/router').then(r=>r.router)
    },
    {
        path:'signal/communication',
        loadChildren:()=>import('./features/signal-feature/routers/router').then(r=>r.router)
    },
    {
        path:'signal/model',
        loadChildren:()=>import('./features/signal-model-communication/routers/router').then(r=>r.router)
    }
];
