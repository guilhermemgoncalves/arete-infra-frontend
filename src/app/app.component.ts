import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SplashScreenComponent} from './core/components/splash-screen/splash-screen.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SplashScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'arete-infra-frontend';
}
