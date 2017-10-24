import { Component, OnInit } from '@angular/core';
import { TreeNode } from '../../../../widgets';

@Component({
  selector: 'kyee-basic-desc',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss', '../tree-desc.component.scss', '../../description.common.scss']
})
export class BasicComponent implements OnInit {
  //示例数据
  basicTree: TreeNode[] = [
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
  // TS示例代码
  basicDemoCode: any = `
import { Component, OnInit } from '@angular/core';
import { TreeWidgetModule, TreeNode } from 'widgets';

@Component({
  selector: 'kyee-basic-desc',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  //示例数据
  basicTree: TreeNode[] = [
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



  constructor() { }

  ngOnInit() {
  }

}
