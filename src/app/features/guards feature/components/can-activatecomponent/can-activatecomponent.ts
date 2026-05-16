import { Component } from '@angular/core';

@Component({
  selector: 'app-can-activatecomponent',
  imports: [],
  templateUrl: './can-activatecomponent.html',
  styleUrl: './can-activatecomponent.scss',
})
export class CanActivatecomponent {

  Test(){
    return false
  }
}
