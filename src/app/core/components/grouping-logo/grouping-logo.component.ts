import { Component } from '@angular/core';

@Component({
  selector: 'app-grouping-logo',
  imports: [],
  templateUrl: './grouping-logo.component.html',
  styleUrl: './grouping-logo.component.scss'
})
export class GroupingLogoComponent {
  logos: string[] = [
    'https://placehold.co/600x400',
    'https://placehold.co/600x400',
    'https://placehold.co/600x400',
    'https://placehold.co/600x400',
    'https://placehold.co/600x400',
    'https://placehold.co/600x400'
  ];
}
