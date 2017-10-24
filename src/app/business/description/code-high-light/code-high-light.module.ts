import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighLightDirective } from './code-high-light.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CodeHighLightDirective
    ],
    exports: [
        CodeHighLightDirective
    ]
})
export class CodeHighLightModule { }
