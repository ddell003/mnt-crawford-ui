import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import jsonBoards from '../../../assets/content/directory.json'

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BoardComponent implements OnInit {

  boards: any[] = [];
  constructor() { }

  ngOnInit(): void {

    console.log('board json', jsonBoards);
    this.boards = jsonBoards.board_commissions.boards;
  }

}
