import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[LightBox]',
})
export class LightBoxDirective implements OnChanges {
  @Input('LightBox') highlightColor: string = 'yellow';
  @Input() defaultColor: string = 'royalblue';

  constructor(private elemRef: ElementRef) {
    // this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }

  ngOnChanges() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }

  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.border = `3px solid ${this.highlightColor}`;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }
}
