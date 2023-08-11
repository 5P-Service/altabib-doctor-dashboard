import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[img]'
})
export class ImgDirective {
  @Input() default: String = "assets/img/user-avatar.png";
  constructor(private element: ElementRef) { }

  @HostListener("error")
  private onError() {
    this.element.nativeElement.src = this.default;
  }

}
