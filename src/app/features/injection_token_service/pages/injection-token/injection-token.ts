import { Component, Inject } from '@angular/core';
import { API_Token, USER_Details_Token } from '../../../../shared/tokens/token';
import { userDetails } from '../../../../shared/interfaces/token_interfcaes';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-injection-token',
  imports: [JsonPipe],
  templateUrl: './injection-token.html',
  styleUrl: './injection-token.scss',
})
export class InjectionToken {

  constructor(
    @Inject(API_Token) public apiURL:string,
    @Inject(USER_Details_Token) public userDetails:userDetails
  ){

  }

}
