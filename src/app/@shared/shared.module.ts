import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'ng-sidebar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports:[
    SidebarModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }
