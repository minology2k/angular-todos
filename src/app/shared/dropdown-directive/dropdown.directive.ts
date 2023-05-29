import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.dropdown-active') isOpen = false;
  ngOnInit() {}

  @HostListener('click') toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
