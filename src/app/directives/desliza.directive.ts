import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDesliza]'
})
export class DeslizaDirective {
  @HostListener('mouseover') amplia(){
    console.log('mouse over')
    this.transform = 'translate(1.1)'
  }
  @HostListener('mouseleave') diminui(){
    console.log('mouse leave')
    this.transform = 'scale(1)'
  }
  @HostBinding('style.transform') transform = ''
  flag = true;
  
  @HostBinding('style.position') position = ''
  @HostBinding('style.top') top = ''
  @HostBinding('style.left') left = ''

  constructor() {}

}
