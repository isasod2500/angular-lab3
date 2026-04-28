import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MainNav } from './main-nav/main-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainNav],
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent{
  protected readonly title = signal('angular-lab3');
}

