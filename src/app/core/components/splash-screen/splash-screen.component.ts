import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-splash-screen',
  imports: [
    NgIf
  ],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss'
})
export class SplashScreenComponent implements OnInit {
  isVisible = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = false;
    }, 5000);
  }
}
