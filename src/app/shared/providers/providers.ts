import { Provider } from "@angular/core";
import { API_Token, USER_Details_Token } from "../tokens/token";


export const providerArray:Provider[] = [
    {
        provide: API_Token,
        useValue: 'https://jsonplaceholder.typicode.com/posts'
    },
    {
        provide: USER_Details_Token,
        useValue:{
            name:'Sreedev',
            age:25,
            email:'sreedev@example.com'
        }
    }
] 