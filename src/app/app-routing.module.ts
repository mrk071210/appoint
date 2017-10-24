import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './basic/login';
import { PageNotFoundComponent } from './basic/page-not-found';
import { HomeComponent } from './basic/home';

import { MainComponent } from './basic/main/main.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            { path: '', component: MainComponent,
                children: [
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: HomeComponent },
                    { path: 'example', loadChildren: './basic/example/example.module#ExampleModule' },
                    { path: 'business', loadChildren: './business/business.module#BusinessModule' },
                    { path: '**', component: PageNotFoundComponent }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
