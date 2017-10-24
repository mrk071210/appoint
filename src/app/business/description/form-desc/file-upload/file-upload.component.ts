import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['../../description.common.scss', '../form-desc.component.scss', './file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  uploadedFiles: any[] = [];
  msgs: any[] = [];
  attributes: any[];
  eventsList: any[];
  functionsList: any[];
  styleList: any[];
  tsDemo1: string;
  tsDemo2: string;
  tsDemo3: string;
  constructor() {
    this.attributes = [
      {
        'name': 'name',
        'type': 'string',
        'default': 'null',
        'description': '用于在后端识别文件的请求参数的名称'
      },
      {
        'name': 'url',
        'type': 'string',
        'default': 'null',
        'description': '上传文件的远程url'
      },
      {
        'name': 'method',
        'type': 'string',
        'default': 'POST',
        'description': '将文件发送到url的HTTP方法'
      },
      {
        'name': 'multiple',
        'type': 'boolean',
        'default': 'false',
        'description': '用于从文件对话框中一次选择多个文件'
      },
      {
        'name': 'accept',
        'type': 'string',
        'default': 'false',
        'description': '限制允许的文件类型，如“image / *”'
      },
      {
        'name': 'disabled',
        'type': 'boolean',
        'default': 'false',
        'description': '禁用上传功能'
      },
      {
        'name': 'auto',
        'type': 'boolean',
        'default': 'false',
        'description': '启用后，选择完成后，上传将自动开始'
      },
      {
        'name': 'maxFileSize',
        'type': 'number',
        'default': 'null',
        'description': '文件大小允许以字节为单位'
      },
      {
        'name': 'invalidFileSizeMessageSummary',
        'type': 'string',
        'default': '{0}: Invalid file size',
        'description': '无效fize大小的摘要消息'
      },
      {
        'name': 'invalidFileSizeMessageDetail',
        'type': 'string',
        'default': '"maximum upload size is {0}."',
        'description': '无效的fize大小的详细信息'
      },
      {
        'name': 'invalidFileTypeMessageSummary',
        'type': 'string',
        'default': '"{0}: Invalid file type, "',
        'description': '无效的fize类型的摘要消息'
      },
      {
        'name': 'invalidFileTypeMessageDetail',
        'type': 'string',
        'default': '"allowed file types: {0}."',
        'description': '无效的fize类型的详细消息'
      },
      {
        'name': 'style',
        'type': 'string',
        'default': 'null',
        'description': '组件的内联样式'
      },
      {
        'name': 'styleClass',
        'type': 'string',
        'default': 'null',
        'description': '组件的样式类'
      },
      {
        'name': 'previewWidth',
        'type': 'number',
        'default': '50',
        'description': '图像缩略图的宽度（以像素为单位）'
      },
      {
        'name': 'chooseLabel',
        'type': 'string',
        'default': 'Choose',
        'description': '选择按钮的标签'
      },
      {
        'name': 'uploadLabel',
        'type': 'string',
        'default': 'Upload',
        'description': '上传按钮的标签'
      },
      {
        'name': 'cancelLabel',
        'type': 'string',
        'default': 'Cancel',
        'description': '取消按钮的标签'
      },
      {
        'name': 'withCredentials',
        'type': 'boolean',
        'default': 'false',
        'description': '跨站点访问控制请求应使用凭证，如Cookie，授权标头或TLS客户端证书'
      },
      {
        'name': 'mode',
        'type': 'string',
        'default': 'advanced',
        'description': '定义组件的UI，可能的值为“advanced”和“basic”'
      },
      {
        'name': 'customUpload',
        'type': 'boolean',
        'default': 'false',
        'description': '是否使用默认上传或在uploadHandler回调中定义的手动实现'
      },
      {
        'name': 'showUploadButton',
        'type': 'boolean',
        'default': 'true',
        'description': '定义客户端FileUpload的上传按钮的可见性'
      },
      {
        'name': 'showCancelButton',
        'type': 'boolean',
        'default': 'true',
        'description': '定义客户端FileUpload的取消按钮的可见性'
      }
    ];
    this.eventsList = [
      {
        'name': 'onBeforeUpload',
        'parameters': 'event.xhr: XmlHttpRequest实例' + '；' + 'event.formData: FormData对象',
        'description': '在文件上传前调用实现自定义请求，如文件之前的post参数'
      },
      {
        'name': 'onBeforeSend',
        'parameters': 'event.xhr: XmlHttpRequest实例' + '；' + 'event.formData: FormData对象',
        'description': '在文件发送前调用，开始自定义请求，如添加头'
      },
      {
        'name': 'onUpload',
        'parameters': 'event.xhr: XmlHttpRequest实例' + '；' + 'event.files: 上传的文件',
        'description': '文件上传完成时调用'
      },
      {
        'name': 'onError',
        'parameters': 'event.xhr: XmlHttpRequest实例' + '；' + 'event.files: 未上传的文件',
        'description': '文件上传失败时调用'
      },
      {
        'name': 'onClear',
        'parameters': '-.',
        'description': '在上传未上传时，使用清除所有按钮删除队列中的文件时调用'
      },
      {
        'name': 'onRemove',
        'parameters': 'event.originalEvent: 原始浏览器事件' + '；' + 'event.file: 所选文件',
        'description': '当文件未上传而是用删除按钮删除时调用'
      },
      {
        'name': 'onSelect',
        'parameters': 'event.originalEvent: 原始浏览器事件' + '；' + 'event.files: 所选文件列表',
        'description': '当选择文件时调用'
      },
      {
        'name': 'onProgress',
        'parameters': 'event.originalEvent: 原始浏览器事件' + '；' + 'event.progress: 计算进度值',
        'description': '当选择文件时调用'
      },
      {
        'name': 'uploadHandler',
        'parameters': 'event.files: 所选文件列表',
        'description': '在自定义上传模式下调用以手动上传文件'
      }
    ];
    this.functionsList = [
      {
        'name': 'upload',
        'parameters': '-',
        'description': '上传所选文件'
      },
      {
        'name': 'clear',
        'parameters': '-',
        'description': '清除文件列表'
      }
    ];
    this.styleList = [
      {
        'name': 'ui-fileupload',
        'element': '容器元素'
      },
      {
        'name': 'ui-fileupload-buttonbar',
        'element': '包含按钮的标题'
      },
      {
        'name': 'ui-fileupload-content',
        'element': '内容部分'
      }
    ];
  }
  onUpload(event) {
    console.log(event);
    for (let file of event.files) {
        this.uploadedFiles.push(file);
    }
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  onBasicUpload(event) {
    console.log(event);
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  onBasicUploadAuto(event) {
    console.log(event);
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  ngOnInit() {
this.tsDemo1 = `
export class FileUploadComponent implements OnInit {
  msgs;
  uploadedFiles: any[] = [];
  constructor() { }
  onUpload(event) {
    for (let file of event.files) {
        this.uploadedFiles.push(file);
    }
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  ngOnInit() {
  }

}`;
this.tsDemo2 = `
export class FileUploadComponent implements OnInit {
  msgs;
  uploadedFiles: any[] = [];
  constructor() { }
  onBasicUpload(event) {
    for (let file of event.files) {
        this.uploadedFiles.push(file);
    }
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  ngOnInit() {
  }

}`;
this.tsDemo3 = `
export class FileUploadComponent implements OnInit {
  msgs;
  uploadedFiles: any[] = [];
  constructor() { }
  onBasicUploadAuto(event) {
    for (let file of event.files) {
        this.uploadedFiles.push(file);
    }
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  ngOnInit() {
  }

}`;
  }

}
