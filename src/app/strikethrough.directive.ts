import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private sam:ElementRef) {}

  @HostListener("click") onClicks(){
    this.textDeco("underline overline")
  }

  @HostListener("dblclick") onDoubleClicks(){
    console.log("Double click");
    this.textDeco("underline")
  }
  
  private textDeco(action:string){
    this.sam.nativeElement.style.textDecoration=action;
  }

}
