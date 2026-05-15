import { Routes } from "@angular/router";

export const Router:Routes = [
    {
        path:'',    
        redirectTo:'router-dashboard',
        pathMatch:'full'
    },
    {
        path:'router-dashboard',
        loadComponent:()=>import('./../pages/router-page/router-page').then(c=>c.RouterPage)
    },
    {
        path:'router-dashboard/:id',
        loadComponent:()=>import('./../pages/router-page/router-page').then(c=>c.RouterPage)

    },
    {
        path:'pages',
        loadComponent:()=>import('./../pages/router-page/router-page').then(c=>c.RouterPage),
        children:[
            {
                path:'',
                pathMatch:'full',
                redirectTo:'page1'
            },
            {
                path:'page1',
                loadComponent:()=> import('./../components/page1/page1').then(c=>c.Page1)
            },
            {
                path:'page2',
                loadComponent:()=> import('./../components/page2/page2').then(c=>c.Page2)
            }
        ]
    }
]