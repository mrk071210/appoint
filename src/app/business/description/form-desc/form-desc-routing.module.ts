import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormDescComponent } from './form-desc.component';
import { InputGroupComponent } from './input-group';
import { InputAutoCompleteComponent } from './input-auto-complete';
import { CalendarComponent } from './calendar';
import { CheckboxComponent } from './checkbox';
import { DropdownComponent } from './dropdown';
import { InputComponent } from './input';
import { ListBoxComponent } from './list-box';
import { MultiSelectComponent } from './multi-select';
import { RadioButtonComponent } from './radio-button';
import { SpinnerComponent } from './spinner';
import { SelectButtonComponent } from './select-button';
import { FileUploadComponent } from './file-upload';
import { InputTextareaComponent } from './input-textarea';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', redirectTo: 'desc', pathMatch: 'full' },
            {path: 'desc', component: FormDescComponent},
            {path: 'input-group', component: InputGroupComponent},
            {path: 'input-auto-complete', component: InputAutoCompleteComponent},
            {path: 'calendar', component: CalendarComponent},
            {path: 'checkbox', component: CheckboxComponent},
            {path: 'dropdown', component: DropdownComponent},
            {path: 'input', component: InputComponent},
            {path: 'list-box', component: ListBoxComponent},
            {path: 'multi-select', component: MultiSelectComponent},
            {path: 'radio-button', component: RadioButtonComponent},
            {path: 'spinner', component: SpinnerComponent},
            {path: 'select-button', component: SelectButtonComponent},
            {path: 'file-upload', component: FileUploadComponent},
            {path: 'input-textarea', component: InputTextareaComponent},
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class FormDescRoutingModule {}
