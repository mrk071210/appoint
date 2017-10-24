import {
    Directive,
    OnInit,
    Input,
    ElementRef
} from '@angular/core';

import * as Prism from 'prismjs';
import   'prismjs/components/prism-typescript';
@Directive({
  selector: '[kyeeCodeHighLight]'
})
export class CodeHighLightDirective implements OnInit {
    constructor(private el: ElementRef) {}

    ngOnInit() {
        Prism.highlightElement(this.el.nativeElement);
    }
}
