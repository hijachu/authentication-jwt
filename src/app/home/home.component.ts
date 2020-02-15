import { Component } from '@angular/core';

import { AuthService } from './../services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeColor = environment.homeColor;

  constructor(public authService: AuthService) { }
}
