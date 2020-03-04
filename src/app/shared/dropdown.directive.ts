import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private _el: ElementRef) { }

  @HostBinding('class.show') isOpen = false;

  @HostListener('click') togleOpen() {
    this.isOpen = !this.isOpen;
    this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
  }
}
