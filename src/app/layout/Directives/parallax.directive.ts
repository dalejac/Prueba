import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1 // parámetro que indica la distancia del elemento en relación al scroll 

  initialTop : number = 0 // indica la posición inicial verticalmente del elemento 

  constructor(private element : ElementRef ) {
    this.initialTop = this.element.nativeElement.getBoundingClientRect().top
  }

  @HostListener('window:scroll', ["$event"])
  onWindowScroll(event){
    this.element.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
  }

}
