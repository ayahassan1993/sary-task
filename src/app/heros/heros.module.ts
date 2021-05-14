import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosComponent } from './heros.component';
import { SharedModule } from './../@shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HerosTableComponent } from './heros-table/heros-table.component';


@NgModule({
  declarations: [HerosComponent, SidebarComponent, HerosTableComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HerosModule { }
