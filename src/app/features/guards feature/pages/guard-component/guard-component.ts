import { Component, Inject } from '@angular/core';
import { guardService } from '../../services/guardservice';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-guard-component',
  imports: [RouterOutlet],
  templateUrl: './guard-component.html',
  styleUrl: './guard-component.scss',
})
export class GuardComponent {

  constructor(private guardService: guardService) { }
  @Inject(Router) public router: Router = new Router()

  loggedToggle() {
    this.guardService.isLoggedUser.update(value => !value)
    this.router.navigate(['guard'])
  }

  loggedToggleChild(){
    // this.guardService.isLoggedUser.update(value => !value)
    this.router.navigate(['guard/canactivateChild'])
  }

  loggedDeactivate(){
    this.router.navigate(['guard/canactivateChild'])
  }

}
