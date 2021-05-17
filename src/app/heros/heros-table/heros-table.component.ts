import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroHelper } from 'src/app/@core/models/helpers/hero.helper';
import { HerosService } from 'src/app/@core/services/heros.service';
import { HerosModule } from './../heros.module';

@Component({
  selector: 'app-heros-table',
  templateUrl: './heros-table.component.html',
  styleUrls: ['./heros-table.component.scss']
})

export class HerosTableComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<any>();
  heros: HerosModule[] = [];
  filterHeros: HerosModule[] = [];
  params;
  show = false;
  nameSort = 'ascending'
  filterdKeyword = ''
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
        if (Object.keys(this.params).length > 0 || this.filterdKeyword.length > 0) 
          this.filterData();
        else
          this.filterHeros = this.heros;
      }
    )
  }

  filterData() {
    console.log(this.filterdKeyword)
    this.filterHeros = this.heros.filter((data: any) =>
      (this.params.name ? data.name.toLowerCase().includes(this.params.name.toLowerCase()) : data) &&
      (this.filterdKeyword.length > 0 ? data.name.toLowerCase().includes(this.filterdKeyword.toLowerCase()) : data) &&
      (this.params.email ? data.email.toLowerCase().includes(this.params.email.toLowerCase()) : data) &&
      (this.params.country ? data.country.alpha3Code.toLowerCase().includes(this.params.country.toLowerCase()) : data) &&
      (this.params.company ? data.company.toLowerCase().includes(this.params.company.toLowerCase()) : data) &&
      (this.params.date ? data.date == this.params.date : data) &&
      (this.params.phone ? data.phone.toLowerCase().includes(this.params.phone.toLowerCase()) : data)
    )
  }

  toggle(event) {
    this.toggleSidebar.emit(event);
  }

  sortByName() {
    if (this.nameSort == 'ascending') {
      this.filterHeros = this.filterHeros.sort((a: any, b: any) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
      this.nameSort = 'descending';
    }
    else {
      this.filterHeros = this.filterHeros.sort((a: any, b: any) => a.name !== b.name ? a.name > b.name ? -1 : 1 : 0);
      this.nameSort = 'ascending';
    }
  }

}
