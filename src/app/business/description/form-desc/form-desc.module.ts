import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighLightModule } from '../code-high-light';
import { CommonWidgetsModule, FormWidgetsModule , DatatableWidgetModule} from '../../../widgets';
import { FormDescRoutingModule } from './form-desc-routing.module';
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
    CommonModule,
    CodeHighLightModule,
    CommonWidgetsModule,
    FormWidgetsModule,
    DatatableWidgetModule,
    FormDescRoutingModule
  ],
  declarations: [
    FormDescComponent,
    InputGroupComponent,
    InputAutoCompleteComponent,
    CalendarComponent,
    CheckboxComponent,
    DropdownComponent,
    InputComponent,
    ListBoxComponent,
    MultiSelectComponent,
    RadioButtonComponent,
    SpinnerComponent,
    SelectButtonComponent,
    FileUploadComponent,
    InputTextareaComponent
  ]
})
export class FormDescModule { }
