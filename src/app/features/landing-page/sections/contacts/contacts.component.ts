import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'contacts',
  imports: [RouterModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

  constructor(private router: Router) {
  }

  navigateLogin() {
    this.router.navigate(['/login']);
  }
}
