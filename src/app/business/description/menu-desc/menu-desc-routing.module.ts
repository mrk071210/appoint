import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuDescComponent } from './menu-desc.component';
import { BreadcrumbComponent } from './breadcrumb';
import { MegamenuComponent } from './megamenu';
import { TabmenuComponent } from './tabmenu';
import { TieredmenuComponent } from './tieredmenu';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'desc', pathMatch: 'full' },
      { path: 'desc', component: MenuDescComponent },
      { path: 'breadcrumb', component: BreadcrumbComponent },
      { path: 'megamenu', component: MegamenuComponent },
      { path: 'tabmenu', component: TabmenuComponent },
      { path: 'tieredmenu', component: TieredmenuComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class MenuDescRoutingModule { }
