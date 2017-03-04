import { Component } from '@angular/core';
import Drop from 'tether-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  onClick(e: Event) {
    new Drop({
      target: e.srcElement,
      content: 'Welcome to the future!',
      position: 'bottom left',
      openOn: 'always',
    });
  }
}
