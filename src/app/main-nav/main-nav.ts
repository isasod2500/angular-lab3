import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './main-nav.html',
  styleUrl: './main-nav.css',
})
export class MainNav {}
