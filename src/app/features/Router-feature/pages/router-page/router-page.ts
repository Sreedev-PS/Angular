import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet, } from "@angular/router";

@Component({
  selector: 'app-router-page',
  imports: [RouterLink, RouterLinkActive,RouterOutlet],
  templateUrl: './router-page.html',
  styleUrl: './router-page.scss',
})
export class RouterPage {

  getValue = signal<string|null>('0')

  getObserver = signal <string|null>('0')

  constructor(
    private navigate:Router,
    private actRoute:ActivatedRoute
  ){
    this.getValue.update(()=>
       this.actRoute.snapshot.paramMap.get('id')?? '0'
    )
    this.actRoute.paramMap.subscribe((m)=>this.getObserver.set(m.get('id')??'0'))
  }

  pathFn() {
    this.navigate.navigate(['router/router-dashboard',10])

  }
  queryhFn() {
    this.navigate.navigate(['router/router-dashboard'],{queryParams:{
      age:20,
      help:true
    }})
  }
  page1Fn() {
    this.navigate.navigate(['router/pages'])
  }
  Page2Fn() {
    this.navigate.navigateByUrl('router/pages/page2')
  }
  getFn() {
    setTimeout(() => {
      
    this.navigate.navigate(['router/router-dashboard',10])
    }, 100);
    
    this.navigate.navigate(['router/router-dashboard'])
  }
  observableFn() {
    setTimeout(() => {
    this.navigate.navigate(['router/router-dashboard',20])
    }, 100);
    this.navigate.navigate(['router/router-dashboard'])
  }

}
