import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroHelper } from 'src/app/@core/models/helpers/hero.helper';
import { HerosService } from 'src/app/@core/services/heros.service';
import { HerosModule } from './../heros.module';

@Component({
  selector: 'app-heros-table',
  templateUrl: './heros-table.component.html',
  styleUrls: ['./heros-table.component.css']
})

export class HerosTableComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<any>();
  heros: HerosModule[] = [];
  filterHeros: HerosModule[] = [];
  params;
  show = false;
  constructor(private herosServ: HerosService, private heroHelper: HeroHelper, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(filter => {
      this.params = filter;
      this.getHeros();
    })

  }

  getHeros() {
    this.herosServ.getHeros().subscribe(
      (res) => {
        this.heros = this.heroHelper.setheros(res);
        if (Object.keys(this.params).length == 0)
          this.filterHeros = this.heros
        else
          this.filterData();
      }
    )
  }
  filterData() {
    this.filterHeros = this.heros.filter((data: any) =>
      (this.params.name ? data.name.toLowerCase().includes(this.params.neme.toLowerCase()) : data) &&
      (this.params.email ? data.email.toLowerCase().includes(this.params.email.toLowerCase()) : data) &&
      (this.params.country ? data.country.toLowerCase().includes(this.params.country.toLowerCase()) : data) &&
      (this.params.Company ? data.Company.toLowerCase().includes(this.params.Company.toLowerCase()) : data) &&
      (this.params.date ? data.date == this.params.date : data) &&
      (this.params.phone ? data.phone.toLowerCase().includes(this.params.phone.toLowerCase()) : data)
    )
  }

  filterByName(event){
    this.filterHeros = this.filterHeros.filter((data: any) => data.name.toLowerCase().includes(event.target.value.toLowerCase()));
    this.show = false;
  }

  toggle(event) {
    this.toggleSidebar.emit(event);
  }

  sortByName(){
    this.filterHeros = this.filterHeros.sort((a : any, b : any) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);

  }

}
