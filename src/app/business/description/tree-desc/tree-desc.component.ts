import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-tree-desc',
  templateUrl: './tree-desc.component.html',
  styleUrls: ['./tree-desc.component.scss', '../description.common.scss']
})
export class TreeDescComponent implements OnInit {

  treeOptionS = [
    {
      'name': 'label',
      'type': 'string',
      'default': 'null',
      'description': '节点的名称'
    },
    {
      'name': 'data',
      'type': 'any',
      'default': 'null',
      'description': '节点的描述'
    },
    {
      'name': 'icon',
      'type': 'string',
      'default': 'null',
      'description': '显示在内容旁边的节点图标'
    },
    {
      'name': 'expandedIcon',
      'type': 'string',
      'default': 'null',
      'description': '展开状态的图标'
    },
    {
      'name': 'collapsedIcon',
      'type': 'string',
      'default': 'null',
      'description': '折叠状态的图标'
    },
    {
      'name': 'children',
      'type': 'TreeNode[]',
      'default': 'null',
      'description': 'treenodes数组作为子节点'
    },
    {
      'name': 'leaf',
      'type': 'boolean',
      'default': 'null',
      'description': '指定节点是否有子节点，用于延迟加载'
    },
    {
      'name': 'style',
      'type': 'object',
      'default': 'null',
      'description': '节点的内联样式'
    },
    {
      'name': 'styleClass',
      'type': 'string',
      'default': 'null',
      'description': '节点的样式类名'
    },
    {
      'name': 'expanded',
      'type': 'boolean',
      'default': 'false',
      'description': '节点处于展开还是折叠状态'
    },
    {
      'name': 'type',
      'type': 'string',
      'default': 'false',
      'description': '与ng-template匹配的节点类型'
    },
    {
      'name': 'parent',
      'type': 'TreeNode',
      'default': 'null',
      'description': '父节点'
    },
    {
      'name': 'draggable',
      'type': 'boolean',
      'default': 'null',
      'description': '是否禁用某个特定节点的拖放，即使启用了draggableNodes'
    },
    {
      'name': 'droppable',
      'type': 'boolean',
      'default': 'null',
      'description': '是否禁用某个特定节点的丢弃，即使启用了droppableNodes'
    },
    {
      'name': 'selectable',
      'type': 'boolean',
      'default': 'null',
      'description': '禁用特定节点的选中'
    }
  ];

  html1 = `
@Injectable()
export class NodeService {
    
    constructor(private http: Http) {}

    getFiles() {
        return this.http.get('showcase/resources/data/files.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }
}
`;
  html2 = `
{
    "data": 
    [
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
                    "children": [{"label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document"}, {"label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document"}]
                },
                {
                    "label": "Home",
                    "data": "Home Folder",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [{"label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month"}]
                }]
        },
        {
            "label": "Pictures",
            "data": "Pictures Folder",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": [
                {"label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo"},
                {"label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo"},
                {"label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo"}]
        },
        {
            "label": "Movies",
            "data": "Movies Folder",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": [{
                    "label": "Al Pacino",
                    "data": "Pacino Movies",
                    "children": [{"label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie"}]
                },
                {
                    "label": "Robert De Niro",
                    "data": "De Niro Movies",
                    "children": [{"label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie"}]
                }]
        }
    ]
}
`;
html3=`
export class TreeDemoComponent implements OnInit {
    
    files: TreeNode[];

    constructor(private nodeService: NodeService) {}
    
    ngOnInit() {
        this.nodeService.getFiles().then(files => this.files = files);
    }

}
`;
html4=`
export class TreeDemoComponent implements OnInit {
    
    files: TreeNode[];
    
    selectedFile: TreeNode;

    constructor(private nodeService: NodeService) {}
    
    ngOnInit() {
        this.nodeService.getFiles().then(files => this.files = files);
    }

}
`;
html5=`
export class TreeDemoComponent implements OnInit {
        
        files: TreeNode[];
        
        selectedFiles: TreeNode[];

        constructor(private nodeService: NodeService) {}
        
        ngOnInit() {
            this.nodeService.getFiles().then(files => this.files = files);
        }

    }
`;
html6=`
export class TreeDemoComponent implements OnInit {
    
    files: TreeNode[];
    
    selectedFiles: TreeNode[];

    constructor(private nodeService: NodeService) {}
    
    ngOnInit() {
        this.nodeService.getFiles().then(files => this.files = files);
    }
    
    nodeSelect(event) {
        //event.node = selected node
    }

}
`;

treeProperties = [
    {
      'name': 'value',
      'type': 'array',
      'default': 'null',
      'description': 'treenodes数组'
    },
    {
      'name': 'selectionMode',
      'type': 'string',
      'default': 'null',
      'description': '定义选择模式、有效值“单个”、“多个”和“复选框”'
    },
    {
      'name': 'selection',
      'type': 'any',
      'default': 'null',
      'description': '单个treenode实例或数组来绑定选中项'
    },
    {
      'name': 'style',
      'type': 'object',
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
      'name': 'contextMenu',
      'type': 'ContextMenu',
      'default': 'null',
      'description': 'contextMenu实例'
    },
    {
      'name': 'orientation',
      'type': 'string',
      'default': 'vertical',
      'description': '定义树的方向，有效的值是“vertical”和“horizontal”'
    },
    {
      'name': 'metaKeySelection',
      'type': 'boolean',
      'default': 'true',
      'description': '定义如何选择多个项目，当需要按下metaKey来选择或取消选择项目时，并且设置为每个项目的错误选择可以单独切换。启用触摸的设备，metaKeySelection将自动关闭'
    },
    {
      'name': 'propagateSelectionUp',
      'type': 'boolean',
      'default': 'true',
      'description': '复选框的选择状态是否传播到父类节点'
    },
    {
      'name': 'propagateSelectionDown',
      'type': 'boolean',
      'default': 'true',
      'description': '复选框的选择状态是否传播到子类节点'
    } 
  ];
  treeEvents=[
    {
      'name': 'onNodeSelect',
      'parameters': 'event.originalEvent: browser event;event.node: Selected node instance',
      'description': '在选择节点时调用'
    },
    {
      'name': 'onNodeUnselect',
      'parameters': 'event.originalEvent: browser event;event.node: Unselected node instance',
      'description': '在未选择节点时调用'
    },
    {
      'name': 'onNodeExpand',
      'parameters': 'event.originalEvent: browser event;event.node: Expanded node instance',
      'description': '在展开节点时调用'
    },
    {
      'name': 'onNodeCollapse',
      'parameters': 'event.originalEvent: browser event;event.node: Collapsed node instance',
      'description': '当折叠节点时调用'
    },
    {
      'name': 'onNodeContextMenuSelect',
      'parameters': 'event.originalEvent: browser event;event.node: Selected node instance',
      'description': '在右击选择节点时调用'
    },
    {
      'name': 'onNodeDrop',
      'parameters': 'event.originalEvent: browser event;event.node: Dragged node instance\nevent.node: Dropped node instance',
      'description': '在右击选择节点时调用'
    },
  ];
  treeStyles=[
    {
      'name': 'ui-tree',
      'element': '主要的容器元素'
    },
    {
      'name': 'ui-tree-horizontal',
      'element': '水平模式中的主容器元素'
    },
    {
      'name': 'ui-tree-container',
      'element': '容器的节点'
    },
    {
      'name': 'ui-treenode',
      'element': 'treenode元素'
    },
    {
      'name': 'ui-treenode-content',
      'element': 'treenode内容'
    },
    {
      'name': 'ui-treenode-toggler',
      'element': '切换图标'
    },
    {
      'name': 'ui-treenode-icon',
      'element': 'treenode的图标'
    },
    {
      'name': 'ui-treenode-label',
      'element': 'treenode的标签'
    },
    {
      'name': 'ui-treenode-children',
      'element': '子节点元素容器'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
