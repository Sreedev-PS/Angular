import {Routes} from '@angular/router'

export const router:Routes = [
    {
        path:'',
        loadComponent:()=>import('./../pages/signal-model/signal-model').then(c=>c.SignalModel)
    }
]