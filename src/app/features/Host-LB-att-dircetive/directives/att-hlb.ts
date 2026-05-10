import { Directive, ElementRef, HostBinding, HostListener, input, Input, Renderer2 } from "@angular/core";

@Directive({
    selector:'[hlbatt]'
})

export class HLbAttDirective {

    constructor(
        private ele:ElementRef,
        private rend:Renderer2
    ){}
    
    @HostBinding('style.backgroundColor') bgColor:string = '';

    @Input() set hlbatt(color:string){
        this.bgColor = color;
    }

    @HostListener('mouseover') onHover(){
        this.rend.setStyle(this.ele.nativeElement,'color','white')
        this.rend.setStyle(this.ele.nativeElement,'width','fit-content')
        this.rend.setStyle(this.ele.nativeElement,'transition','1s')
        this.rend.setStyle(this.ele.nativeElement,'padding','10px')
        this.rend.setStyle(this.ele.nativeElement,'cursor','pointer')
    }

    @HostListener('mouseleave') onLeave(){
        this.rend.setStyle(this.ele.nativeElement,'color','black')
        this.rend.setStyle(this.ele.nativeElement,'width','fit-content')
        this.rend.setStyle(this.ele.nativeElement,'transition','1s')
        this.rend.setStyle(this.ele.nativeElement,'padding','10px')
        this.rend.setStyle(this.ele.nativeElement,'cursor','default')
    }

}