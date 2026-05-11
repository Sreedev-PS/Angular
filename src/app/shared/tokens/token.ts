import { InjectionToken } from '@angular/core';
import { userDetails } from '../interfaces/token_interfcaes';


export const API_Token = new InjectionToken<string>('API_Token');
export const USER_Details_Token = new InjectionToken<userDetails>('USER_Details_Token');