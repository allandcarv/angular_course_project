import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output()
  public viewTrigger = new EventEmitter<string>();

  onSelectView(view: string): void {
    this.viewTrigger.emit(view);
  }

}
