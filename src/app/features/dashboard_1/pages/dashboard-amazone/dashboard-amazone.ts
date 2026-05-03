import { Component } from '@angular/core';
import { UserDetailsService } from '../../../../shared/services/user-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-amazone',
  imports: [],
  templateUrl: './dashboard-amazone.html',
  styleUrl: './dashboard-amazone.scss',
})
export class DashboardAmazone {

  constructor(private userDetailsService: UserDetailsService,
    private router:Router
   ){}

  myClick(){
    this.userDetailsService.stroreUserDetails('my Name is Developer#01010')
    this.router.navigate(['/page2']);
  }

}
