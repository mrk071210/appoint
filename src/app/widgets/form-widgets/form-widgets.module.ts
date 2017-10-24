import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { InputTextModule } from './inputtext/inputtext';
import { AutoCompleteModule } from './autocomplete/autocomplete';
import { CalendarModule } from './calendar/calendar';
import { CheckboxModule } from './checkbox/checkbox';
import { DropdownModule } from './dropdown/dropdown';
import { EditorModule } from './editor/editor';
import { ListboxModule } from './listbox/listbox';
import { MultiSelectModule } from './multiselect/multiselect';
import { RadioButtonModule } from './radiobutton/radiobutton';
import { SpinnerModule } from './spinner/spinner';
import { SelectButtonModule } from './selectbutton/selectbutton';
import { FileUploadModule } from './fileupload/fileupload';
import { InputTextareaModule } from './inputtextarea/inputtextarea';

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
    FileUploadModule,
    InputTextareaModule
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
