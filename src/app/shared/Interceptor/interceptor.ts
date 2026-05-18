import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { throwError } from "rxjs";

export const interceptor: HttpInterceptorFn = ((req, next) => {
    const token: boolean = false
    const tokenValue = ''
    if (token) {
        return throwError(() => new HttpErrorResponse({
            status: 401,
            statusText: 'Token missing',
            error: 'Token missing'

        }))
    } else {
        const headerset = req.clone({
            setHeaders: {
                Authorization: 'bearer' + tokenValue
            }
        })

        return next(headerset)
    }
})