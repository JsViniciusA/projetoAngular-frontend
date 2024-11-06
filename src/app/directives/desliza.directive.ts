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
  
  @HostListener('click') centralizar(){
    if(this.flag == true){
      this.position = 'fixed'
      this.top = 'calc(100vh - 250px)'
      this.left = 'calc(100vh - 175px)'
      this.flag = !this.flag

    }
    }
  @HostListener('dbclick') resetar(){
    if(this.flag == false){
      this.position = 'static'
    }
  }
  @HostBinding('style.position') position = ''
  @HostBinding('style.top') top = ''
  @HostBinding('style.left') left = ''

  constructor() {}

}
