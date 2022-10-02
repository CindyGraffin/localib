import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[buttonShadow]'
})

export class ButtonShadowDirective {

  private clickBoxShadow: string = 'var(--box-shadow-inset)';
  private initialBoxShadow: string = 'var(--box-shadow-bold-button)';

  constructor(private element: ElementRef) { 
    this.setBoxShadow(this.initialBoxShadow);
  }

  private setBoxShadow(boxShadow: string) {
    this.element.nativeElement.style.boxShadow = boxShadow;
  }

  @HostListener('mousedown') onMouseDown() {
    this.setBoxShadow(this.clickBoxShadow);
  }
  
  @HostListener('mouseup') onMouseUp() {
    this.setBoxShadow(this.initialBoxShadow);
  }

}
