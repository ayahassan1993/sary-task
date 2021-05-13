import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerosComponent } from '../heros/heros.component';
import { AppLayoutComponent } from './app-layout.component';

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: '', redirectTo: 'heros', pathMatch: 'full',
            },
            {
                path: 'heros',
                component: HerosComponent,
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
