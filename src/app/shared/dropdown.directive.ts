import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open')
  private open = false;

  @HostListener('mousedown')
  toggleOpen() {
    this.open = !this.open;
  }
}
