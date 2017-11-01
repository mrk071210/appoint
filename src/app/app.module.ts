import { NgModule } from '@angular/core';
import { KyeeModule } from 'portalface';
import { WidgetsModule } from 'portalface/widgets';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DeploymentConfig } from './config';

import { HomeComponent } from './basic/home/home.component';
import { LoginComponent } from './basic/login/login.component';
import { SidebarComponent } from './basic/sidebar/sidebar.component';
import { HeaderComponent } from './basic/header/header.component';
import { PageNotFoundComponent } from './basic/page-not-found/page-not-found.component';


@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        LoginComponent,
        HomeComponent,
        HeaderComponent,
        SidebarComponent
    ],
    imports: [
        KyeeModule,
        WidgetsModule,
        AppRoutingModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
