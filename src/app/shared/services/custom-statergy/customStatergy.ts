import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()

export class customPreload implements PreloadingStrategy{

    preload(
        route:Route,load:()=>Observable<unknown>
    ):Observable<unknown>{
        if(route.data?.['preload']){
            return load()
        }

        return of(null)
    }
}