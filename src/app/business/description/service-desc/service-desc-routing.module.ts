import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ServiceDescComponent } from './service-desc.component';
import { HttpComponent } from './http';
import { RouterComponent } from './router';
import { CacheComponent } from './cache';
import { KyeeutilComponent } from './kyeeutil';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', redirectTo: 'desc', pathMatch: 'full'},
            {path: 'desc', component: ServiceDescComponent},
            {path: 'http', component: HttpComponent},
            {path: 'router', component: RouterComponent},
            {path: 'cache', component: CacheComponent},
            {path: 'util', component: KyeeutilComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ServiceDescRoutingModule {}
