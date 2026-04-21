import { Component, OnInit } from '@angular/core';
import jsonBoards from '../../../assets/content/directory.json'

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  admins = [];

  constructor() { }

  ngOnInit(): void {
    this.admins = jsonBoards.town_admin.members;
  }

  getEmailHref(email: string): string {
    return `mailto:${this.getDisplayEmail(email)}`;
  }

  getDisplayEmail(email: string): string {
    return email ? email.trim().replace(/\.$/, '') : '';
  }

  getPhoneHref(phone: string): string {
    const digits = phone ? phone.replace(/\D/g, '') : '';
    return digits ? `tel:+1${digits}` : '';
  }

}
