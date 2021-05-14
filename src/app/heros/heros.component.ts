import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  @ViewChild('drawer') drawer;
  showSidebar = true;
  constructor() { 
    if(window.innerWidth < 750){
      this.showSidebar = false
    }
  }

  ngOnInit(): void {

  }

  toggleSidebar(){
    this.drawer.toggle();
  }

}
