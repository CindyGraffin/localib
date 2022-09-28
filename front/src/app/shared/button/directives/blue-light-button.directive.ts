import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[blueLightButton]'
})
export class BlueLightButtonDirective {
  private initialBgColor: string = 'var(--color-secondary)'
  private initialColor: string = 'var(--color-black)'
  private hoverBgColor: string = 'var(--color-secondary-light)'

  constructor(private element: ElementRef) {
    this.setColor(this.initialColor);
    this.setBgColor(this.initialBgColor);
  }

  private setColor(color: string) {
    this.element.nativeElement.style.color = color;
  }

  private setBgColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBgColor(this.hoverBgColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBgColor(this.initialBgColor);
  }

}
