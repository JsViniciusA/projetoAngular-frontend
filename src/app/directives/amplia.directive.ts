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
      this.top = '0'
    }
  }
  @HostBinding('style.position') position = ''
  @HostBinding('style.top') top = ''
  @HostBinding('style.left') left = ''

  constructor() { }

}
