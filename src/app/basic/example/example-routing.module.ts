import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExampleDashboardComponent } from './example-dashboard';
import { ExampleFormComponent } from './example-form';
import { ExampleLayoutComponent } from './example-layout';

@NgModule({
	imports: [
		RouterModule.forChild([
            {path: '', component: ExampleLayoutComponent},
		])
	],
	exports: [
		RouterModule
	]
})
export class ExampleRoutingModule {}
