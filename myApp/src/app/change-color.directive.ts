import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private er: ElementRef, private render: Renderer2) {
    this.changeColor("100px");

   }
   changeColor(colr:string) {
    this.render.setStyle(this.er.nativeElement, 'font-size', colr);
   }

   @HostListener('mouseenter') m1() {
    this.changeColor("red");
   }
   @HostListener('mouseleave') m2() {
    this.changeColor("green");
   }
}
