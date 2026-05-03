import { Component } from '@angular/core';
import { UserDetailsService } from '../../../../shared/services/user-details';

@Component({
  selector: 'app-dashboard-flipkart',
  imports: [],
  templateUrl: './dashboard-flipkart.html',
  styleUrl: './dashboard-flipkart.scss',
})
export class DashboardFlipkart {

  userName:string = 'hello123'

  constructor(
    private userService:UserDetailsService
  ){

    this.userService.getUserDetails().subscribe((name)=>this.userName = name)
  }

  ngOnInit(){
  }

}
