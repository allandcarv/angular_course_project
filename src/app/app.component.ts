import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public view = 'recipes';

  handleNavigation(view: string): void {
    this.view = view;
  }
}
