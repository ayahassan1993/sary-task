import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router , NavigationExtras, ActivatedRoute} from '@angular/router';
import { CountriesService } from './../../@core/services/counters.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<any>();
  countries: string[] = [];
  filterdParams : any = {};
  f;
  close = false
  
  constructor(private router : Router,private routerPrams : ActivatedRoute,private countriesService: CountriesService ) {
    if(window.innerWidth < 750){
      this.close = true;
    }
   }

  ngOnInit(): void {
    this.getCountries();
    this.routerPrams.queryParams.subscribe(x => {
      this.filterdParams = x;
    })
    this.f = new FormGroup({
      email : new FormControl(this.filterdParams.email ? this.filterdParams.email : '',[Validators.email]),
      phone : new FormControl(this.filterdParams.phone ? this.filterdParams.phone : '',[Validators.pattern("[0-9 ]{11}")]),
      name  : new FormControl(this.filterdParams.name ? this.filterdParams.name : ''),
      company : new FormControl(this.filterdParams.company ? this.filterdParams.company : ''),
      country : new FormControl(this.filterdParams.country ? this.filterdParams.country : ''),
      date : new FormControl(this.filterdParams.date ? new Date(this.filterdParams.date) : ''),
    })
  }

  getCountries(){
    this.countriesService.getCountries().subscribe(
      (res : any) =>{
        this.countries = res;
      }
    )
  }

  submit(){
    const params = {};
    Object.keys(this.f.value).map(x => {
      if(this.f.value[x]){
        params[x] = this.f.value[x]
      }
    })
    let nav_values : NavigationExtras = {
      queryParams : {
        ...params
      }
    }
    this.router.navigate(["/"], nav_values);
  }
  toggle(event) {
    this.toggleSidebar.emit(event);
  }

  reset(){
    this.f.reset();
  }

}
