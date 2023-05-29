import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'black';
  @Input() highlightColor: string = 'white';

  @HostBinding('style.height') hostHeight: string = '50px';
  @HostBinding('style.color') hostTextColor: string = this.defaultColor;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.hostTextColor = this.defaultColor;
  }

  // Represent for the dom element which this directive sits on
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      'blue'
    );
    this.hostHeight = '120px';
    this.hostTextColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      'green'
    );
    this.hostHeight = '50px';
    this.hostTextColor = this.defaultColor;
  }
}
