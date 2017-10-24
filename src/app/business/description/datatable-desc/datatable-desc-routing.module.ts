import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    BasicComponent,
    TemplatingComponent,
    ColGroupComponent,
    RowGroupComponent,
    PaginatorComponent,
    SortComponent,
    FilterComponent,
    FacetsComponent,
    EditableComponent,
    ResizeComponent,
    LazyLoadComponent,
    CrudComponent,
    ExportComponent,
    SelectionComponent,
    ScrollComponent
} from '../datatable-desc';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', redirectTo: 'basic', pathMatch: 'full' },
            { path: 'basic', component: BasicComponent },
            { path: 'col-group', component: ColGroupComponent },
            { path: 'crud', component: CrudComponent },
            { path: 'editable', component: EditableComponent },
            { path: 'export', component: ExportComponent },
            { path: 'facets', component: FacetsComponent },
            { path: 'filter', component: FilterComponent },
            { path: 'selection', component: SelectionComponent },
            { path: 'lazy-load', component: LazyLoadComponent },
            { path: 'paginator', component: PaginatorComponent },
            { path: 'resize', component: ResizeComponent },
            { path: 'row-group', component: RowGroupComponent },
            { path: 'sort', component: SortComponent },
            { path: 'templating', component: TemplatingComponent },
            { path: 'scroll', component: ScrollComponent },
            { path: '**', redirectTo: 'basic' }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DatatableDescRoutingModule { }
