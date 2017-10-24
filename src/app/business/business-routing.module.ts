import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BusinessComponent } from './business.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component : BusinessComponent,
                children: [
                    {path: '', redirectTo: 'description', pathMatch: 'full' },
                    {path: 'description', loadChildren: './description/description.module#DescriptionModule'}
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class BusinessRoutingModule {}