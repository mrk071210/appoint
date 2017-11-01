import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './basic/login/login.component';
import { PageNotFoundComponent } from './basic/page-not-found/page-not-found.component';
import { HomeComponent } from './basic/home/home.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'home', component: HomeComponent },
            { path: '**', component: PageNotFoundComponent }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
