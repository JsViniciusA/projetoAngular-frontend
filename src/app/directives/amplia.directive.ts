import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAmplia]'
})
export class AmpliaDirective {
  flag: boolean = false;
  @HostListener('mouseover') amplia(){
    console.log('mouse over')
    this.transform = 'scale(1.2)'

  }
  
  @HostListener('mouseleave') diminui(){
    console.log('mouse leave')
    this.transform = 'scale(1)'
  }

  @HostBinding('style.transform') transform = ''

  
  @HostBinding('style.position') position = ''
  @HostBinding('style.top') top = ''
  @HostBinding('style.left') left = ''

  constructor() { }

}
