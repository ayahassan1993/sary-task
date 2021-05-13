import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  _opened: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  _toggleSidebar() {
    this._opened = !this._opened;
  }
}
