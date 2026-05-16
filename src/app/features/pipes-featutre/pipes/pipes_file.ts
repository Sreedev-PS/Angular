import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";

@Pipe({
    name:'customepipe',
})

export class CustomPipe implements PipeTransform{
    transform(value:string){
        return value.toUpperCase();
    }
}