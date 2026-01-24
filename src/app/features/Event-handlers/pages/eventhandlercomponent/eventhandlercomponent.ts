import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-eventhandlercomponent',
  imports: [],
  templateUrl: './eventhandlercomponent.html',
  styleUrl: './eventhandlercomponent.scss',
})
export class Eventhandlercomponent implements AfterViewInit,OnDestroy {

  private PTag !: HTMLElement

  constructor(
    private el: ElementRef
  ) { }

  @ViewChild('pdiv') pdiv !:ElementRef<HTMLElement>

  ngAfterViewInit(): void {
    this.PTag = this.el.nativeElement.querySelector('p')
    this.PTag.addEventListener('click', this.myclick)
    this.pdiv.nativeElement.addEventListener('click',this.viewClick)
  }

  viewClick = ()=>{
    this.pdiv.nativeElement.style.border = '1px solid white'
    this.pdiv.nativeElement.style.margin = '10px'
  }

  @HostListener('click')myclickfn(){
    this.PTag.style.backgroundColor = 'black'
  }

  myclick = () => {
    this.PTag.style.color = 'red'
  }

  ngOnDestroy(): void {
    this.PTag.removeEventListener('click',this.myclick)
  }

}
