import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {
        path:'subscriber',
        loadChildren:()=>import('./features/Subscribe-methods/router/subscribe_router').then(r=>r.suscribeRouter)
    },
    {
        path:'',
        redirectTo:'subscriber',
        pathMatch:'full'
    },
    {
        path:'eventhandler',
        loadChildren:()=>import('./features/Event-handlers/routers/router').then(r=>r.eventBinder)
    }
    
];
