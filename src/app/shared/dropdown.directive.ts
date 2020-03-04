import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private el: ElementRef) { }

  @HostBinding('class.show') isOpen = false;

  @HostListener('click') togleOpen() {
    this.isOpen = !this.isOpen;
    this.el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
  }
}
