import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[LightBox]',
})
export class LightBoxDirective {
  @Input('LightBox') highlightColor: string = 'yellow';
  @Input() defaultColor: string = 'royalblue';

  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }

  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.border = `3px solid ${this.highlightColor}`;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }
}
