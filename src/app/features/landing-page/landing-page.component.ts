import { Component } from '@angular/core';
import {SplashScreenComponent} from '../../core/components/splash-screen/splash-screen.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    SplashScreenComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
