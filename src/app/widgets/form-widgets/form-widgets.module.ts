import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import {
    InputTextModule,
    AutoCompleteModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    EditorModule,
    ListboxModule,
    MultiSelectModule,
    RadioButtonModule,
    SpinnerModule,
    SelectButtonModule,
    FileUploadModule
} from 'primeng/primeng';

const WIDGETS_MODULES = [
    InputTextModule,
    AutoCompleteModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    EditorModule,
    ListboxModule,
    MultiSelectModule,
    RadioButtonModule,
    SpinnerModule,
    SelectButtonModule,
    FileUploadModule
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        WIDGETS_MODULES
    ],
    exports: [
        WIDGETS_MODULES,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class FormWidgetsModule { }
