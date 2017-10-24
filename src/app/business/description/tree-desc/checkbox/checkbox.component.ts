import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TreeNode } from '../../../../widgets';

@Component({
  selector: 'kyee-checkbox-desc',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss', '../tree-desc.component.scss', '../../description.common.scss']
})
export class CheckboxComponent implements OnInit,AfterViewInit {
  selectedFiles: TreeNode[];
  //示例数据
  checkboxTree: TreeNode[] = [
    {
      "label": "Documents",
      "data": "Documents Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "checked":false,
      "children": [{
        "label": "Work",
        "data": "Work Folder",
        "expandedIcon": "fa-folder-open",
        "collapsedIcon": "fa-folder",
        "checked":false,
        "children": [{ "label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document","checked":true}, { "label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document" }]
      },
      {
        "label": "Home",
        "data": "Home Folder",
        "expandedIcon": "fa-folder-open",
        "collapsedIcon": "fa-folder",
        "children": [{ "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month" }]
      }]
    },
    {
      "label": "Pictures",
      "data": "Pictures Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "checked":false,
      "children": [
        { "label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo", "checked":true},
        { "label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo", "checked":false},
        { "label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo" , "checked":true}]
    },
    {
      "label": "Movies",
      "data": "Movies Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "children": [{
        "label": "Al Pacino",
        "data": "Pacino Movies",
        "checked":true,
        "children": [{ "label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie" ,"checked":true }, { "label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie" ,"checked":true}]
      },
      {
        "label": "Robert De Niro",
        "data": "De Niro Movies",
        "children": [{ "label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie" }]
      }]
    }
  ];

  treeData: TreeNode[] = [
    {
      "label": "Documents",
      "data": "Documents Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "checked":false,
      "children": [{
        "label": "Work",
        "data": "Work Folder",
        "expandedIcon": "fa-folder-open",
        "collapsedIcon": "fa-folder",
        "checked":false,
        "children": [{ "label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document","checked":true}, { "label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document" }]
      },
      {
        "label": "Home",
        "data": "Home Folder",
        "expandedIcon": "fa-folder-open",
        "collapsedIcon": "fa-folder",
        "children": [{ "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month" }]
      }]
    },
    {
      "label": "Pictures",
      "data": "Pictures Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "checked":true,
      "children": [
        { "label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo", "checked":true},
        { "label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo", "checked":true},
        { "label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo" , "checked":true}]
    },
    {
      "label": "Movies",
      "data": "Movies Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "children": [{
        "label": "Al Pacino",
        "data": "Pacino Movies",
        "checked":true,
        "children": [{ "label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie" ,"checked":true }, { "label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie" ,"checked":true}]
      },
      {
        "label": "Robert De Niro",
        "data": "De Niro Movies",
        "children": [{ "label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie" }]
      }]
    }
  ];
  // TS示例代码
  checkboxDemoCode: any = `
import { Component, OnInit } from '@angular/core';
import { TreeWidgetModule, TreeNode } from 'portalface/widgets'; //注：引用portalface库中的widgets模块下的FormWidgetsModule以及TreeNode

@Component({
  selector: 'kyee-multiple-desc',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss']
})
export class MultipleComponent implements OnInit {
  selectedFiles: TreeNode[];
  //示例数据
  checkboxTree: TreeNode[] = [
    {
      "label": "Documents",
      "data": "Documents Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "children": [{
        "label": "Work",
        "data": "Work Folder",
        "expandedIcon": "fa-folder-open",
        "collapsedIcon": "fa-folder",
        "children": [{ "label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document" }]
      },
      {
        "label": "Home",
        "data": "Home Folder",
        "expandedIcon": "fa-folder-open",
        "collapsedIcon": "fa-folder",
        "children": [{ "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month" }]
      }]
    },
    {
      "label": "Pictures",
      "data": "Pictures Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "children": [
        { "label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo" },
        { "label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo" },
        { "label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo" }]
    },
    {
      "label": "Movies",
      "data": "Movies Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "children": [{
        "label": "Al Pacino",
        "data": "Pacino Movies",
        "children": [{ "label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie" }]
      },
      {
        "label": "Robert De Niro",
        "data": "De Niro Movies",
        "children": [{ "label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie" }]
      }]
    }
  ];

  constructor() { }

  ngOnInit() { }

}
`;
autoSelectedDemoCode: any = `
//示例数据
checkboxTree: TreeNode[] = [
  {
    "label": "Documents",
    "data": "Documents Folder",
    "expandedIcon": "fa-folder-open",
    "collapsedIcon": "fa-folder",
    "checked":false,
    "children": [{
      "label": "Work",
      "data": "Work Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "checked":false,
      "children": [{ "label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document","checked":true}, { "label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document" }]
    },
    {
      "label": "Home",
      "data": "Home Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "children": [{ "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month" }]
    }]
  },
  {
    "label": "Pictures",
    "data": "Pictures Folder",
    "expandedIcon": "fa-folder-open",
    "collapsedIcon": "fa-folder",
    "checked":false,
    "children": [
      { "label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo", "checked":true},
      { "label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo", "checked":false},
      { "label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo" , "checked":true}]
  },
  {
    "label": "Movies",
    "data": "Movies Folder",
    "expandedIcon": "fa-folder-open",
    "collapsedIcon": "fa-folder",
    "children": [{
      "label": "Al Pacino",
      "data": "Pacino Movies",
      "checked":true,
      "children": [{ "label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie" ,"checked":true }, { "label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie" ,"checked":true}]
    },
    {
      "label": "Robert De Niro",
      "data": "De Niro Movies",
      "children": [{ "label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie" }]
    }]
  }
];
`;

  constructor() {
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
  }

}
