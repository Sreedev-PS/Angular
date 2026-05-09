import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector:'[colorattr]'
})

export class AttColor {

    constructor(
        private element:ElementRef,
        private renderer2:Renderer2
    ){}

    @Input() set colorattr(value:string){
        if(value)  {
            this.renderer2.setStyle(this.element.nativeElement,'color',value)
        }
    }
}