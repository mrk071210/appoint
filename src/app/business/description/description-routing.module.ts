import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', redirectTo: 'common-desc', pathMatch: 'full' },
            {
                path: 'development-criterion',
                loadChildren: './development-criterion/development-criterion.module#DevelopmentCriterionModule'
            },
            {
                path: 'common-desc',
                loadChildren: './common-desc/common-desc.module#CommonDescModule'
            },
            {
                path: 'charts-desc',
                loadChildren: './charts-desc/charts-desc.module#ChartsDescModule'
            },
            {
                path: 'datalist-desc',
                loadChildren: './datalist-desc/datalist-desc.module#DatalistDescModule'
            },
            {
                path: 'datascroller-desc',
                loadChildren: './datascroller-desc/datascroller-desc.module#DatascrollerDescModule'
            },
            {
                path: 'datatable-desc',
                loadChildren: './datatable-desc/datatable-desc.module#DatatableDescModule'
            },
            {
                path: 'echarts-desc',
                loadChildren: './echarts-desc/echarts-desc.module#EchartsDescModule'
            },
            {
                path: 'form-desc',
                loadChildren: './form-desc/form-desc.module#FormDescModule'
            },
            {
                path: 'menu-desc',
                loadChildren: './menu-desc/menu-desc.module#MenuDescModule'
            },
            {
                path: 'orgchart-desc',
                loadChildren: './orgchart-desc/orgchart-desc.module#OrgchartDescModule'
            },
            {
                path: 'tree-desc',
                loadChildren: './tree-desc/tree-desc.module#TreeDescModule'
            },
            {
                path: 'service-desc',
                loadChildren: './service-desc/service-desc.module#ServiceDescModule'
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DescriptionRoutingModule {}
