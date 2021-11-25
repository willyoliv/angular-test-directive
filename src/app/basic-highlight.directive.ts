import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

  }

  /*  @HostListener('mouseenter') mouseenter(eventData: Event) {
     this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
   }
 
   @HostListener('mouseleave') mouseleave(eventData: Event) {
     this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
   } */

  @HostListener('click', ['$event']) onClick($event: Event) {
    // this.renderer.listen(this.elementRef.nativeElement, 'click', () => {
    //   // $event.preventDefault();
    //   this.elementRef.nativeElement
    //   console.info('clicked: ' + this.elementRef.nativeElement);
    // });
    $event.preventDefault();
    $event.stopPropagation();
    console.log("Clicado");
    return false;
  }
}
