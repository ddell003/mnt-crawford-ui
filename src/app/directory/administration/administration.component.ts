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

}
