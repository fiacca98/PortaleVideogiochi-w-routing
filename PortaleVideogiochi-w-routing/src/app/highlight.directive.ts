import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string;

  @Input('defaultColor') defaultColor: string;

  @Input() nullColor: string = null;

  

  constructor(private elem: ElementRef) { 
    this.setBackground('orange');
  }

  setBackground(color: string){
    this.elem.nativeElement.style.background = color ;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground(this.highlightColor ? this.highlightColor: this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackground(this.nullColor);
  }

  ngOnInit() {
        
  }


}
