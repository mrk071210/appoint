import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message } from '../../../../widgets';
@Component({
  selector: 'kyee-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss', '../../description.common.scss'],
  providers: [ConfirmationService]
})
export class ConfirmDialogComponent implements OnInit {
    msgs: Message[] = [];
    uiProperties: any[];
    confirmDialogProperties: any[];
    confirmDialogStyles: any[];
    confirmDialogDemoCode = `
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message } from '../../../../widgets'; //注：引用portalface库中的widgets模块下的ConfirmationService, Message
@Component({
    selector: 'kyee-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss', '../../description.common.scss'],
    providers: [ConfirmationService]
})
export class ConfirmDialogComponent {   
    msgs: Message[] = [];   
    constructor(private confirmationService: ConfirmationService) {}
    confirm1() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'fa fa-question-circle',
            accept: () => {
                this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }

    confirm2() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }
}
    `;
    confirmDialogDemoCode1 = `
export class ConfirmDialogComponent {        
    constructor(private confirmationService: ConfirmationService) {}
    confirm() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                //Actual logic to perform a confirmation
            }
        });
    }
}   
    `;

    constructor(private confirmationService: ConfirmationService) {}
  
    confirm1() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'fa fa-question-circle',
            accept: () => {
                this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }

    confirm2() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }

  ngOnInit() {
    this.uiProperties = [
        {name:'message', type:'string', default:'null', description:'消息的确认。'},
        {name:'key', type:'string', default:'null', description:'可选键匹配确认对话框的键，当组件树有多个确认对话框时需要使用。'},
        {name:'header', type:'string', default:'null', description:'对话框的标题文本。'},
        {name:'icon', type:'string', default:'null', description:'在消息旁边显示的图标。'},
        {name:'accept', type:'Function', default:'null', description:'在确认操作时回调执行。'},
        {name:'reject', type:'Function', default:'null', description:'当操作被拒绝时回调执行。'},
    ];
    this.confirmDialogProperties = [
        {name:'header', type:'string', default:'null', description:'对话框的标题文本。'},
        {name:'message', type:'string', default:'null', description:'消息的确认。'},
        {name:'key', type:'string', default:'null', description:'可选键匹配确认对话框的键，当组件树有多个确认对话框时需要使用。'},
        {name:'icon', type:'string', default:'null', description:'在消息旁边显示的图标。'},
        {name:'acceptLabel', type:'string', default:'Yes', description:'接受按钮的标签。'},
        {name:'acceptIcon', type:'string', default:'fa-check', description:'接受按钮的图标。'},
        {name:'acceptVisible', type:'boolean', default:'true', description:'接收按钮的可见性。'},
        {name:'rejectLabel', type:'string', default:'No', description:'拒绝按钮的标签。'},
        {name:'rejectIcon', type:'string', default:'fa-close', description:'拒绝按钮的图标。'},
        {name:'rejectVisible', type:'boolean', default:'true', description:'拒绝按钮的可见性。'},
        {name:'width', type:'int', default:'300', description:'对话框的宽度。'},
        {name:'height', type:'int', default:'auto', description:'对话框的高度。'},
        {name:'closeOnEscape', type:'boolean', default:'true', description:'如果按下escape键就会隐藏对话框。'},
        {name:'rtl', type:'boolean', default:'false', description:'当启用对话框时，在RTL方向上显示。'},
        {name:'closable', type:'boolean', default:'true', description:'添加一个关闭图标以隐藏对话框。'},
        {name:'responsive', type:'boolean', default:'true', description:'在响应模式下，对话框调整到屏幕宽度。'},
        {name:'appendTo', type:'any', default:'null', description:'目标元素附加对话框，有效值为“body”或其他元素的本地ng模板变量。'},
    ];
    this.confirmDialogStyles = [
        {name:'ui-dialog', element:'容器元素'},
        {name:'ui-confirmdialog', element:'容器元素'},
        {name:'ui-dialog-titlebar', element:'头的容器'},
        {name:'ui-dialog-title', element:'头元素'},
        {name:'ui-dialog-titlebar-icon', element:'图标容器头'},
        {name:'ui-dialog-titlebar-close', element:'关闭图标元素'},
        {name:'ui-dialog-content', element:'内容元素'}
    ];
  }

}
