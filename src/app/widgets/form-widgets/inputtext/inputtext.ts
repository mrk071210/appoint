import {NgModule,Directive,ElementRef,HostListener,Input,DoCheck,Renderer,AfterViewInit,EventEmitter,Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgModel} from '@angular/forms';

@Directive({
    selector: '[pInputText]',
    host: {
        '[class.ui-inputtext]': 'true',
        '[class.ui-corner-all]': 'true',
        '[class.ui-state-default]': 'true',
        '[class.ui-widget]': 'true',
        '[class.ui-state-filled]': 'filled',
        '[class.kyee-input-extra]': 'useClear'
    },
    providers: [NgModel]
})
export class InputText implements DoCheck, AfterViewInit {

    filled: boolean;
    private clearElement;
    private _value: string;
    @Input() useClear: boolean;
    constructor(
        public el: ElementRef,
        private renderer: Renderer,
        public control: NgModel
    ) { }
        
    ngDoCheck() {
        this.updateFilledState();
    }
    
    ngAfterViewInit() {
        if (this.useClear) {
            this.clearElement = document.createElement("span");
            this.clearElement.className = 'fa fa-close kyee-clear';
            this.clearElement.style.visibility = 'hidden';
            this.el.nativeElement.after(this.clearElement);
            this.renderer.listen(this.clearElement, 'click', () => {
                this.el.nativeElement.value = '';
                this.control.viewToModelUpdate('');
                this.clearElement.style.visibility = 'hidden';
            });
        }
    }

    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    @HostListener('input', ['$event']) 
    onInput(e) {
        this.updateFilledState();
        if(this.useClear){
            if (this.el.nativeElement.value) {
                this.clearElement.style.visibility = 'visible';
            } else {
                this.clearElement.style.visibility = 'hidden';
            }
        }
    }
    
    updateFilledState() {
        this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
    }
}

@NgModule({
    imports: [CommonModule],
    exports: [InputText],
    declarations: [InputText]
})
export class InputTextModule { }
