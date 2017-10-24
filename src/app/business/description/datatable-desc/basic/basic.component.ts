import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-basic-desc',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss', '../../description.common.scss']
})
export class BasicComponent implements OnInit {

  cars: any[];
  cols: any[];
  tableProperties: any[];
  tableEvents: any[];
  tableMethods: any[];
  tableStyle: any[];
  columnAttribute: any[];
  basicDemoCode: string;
  constructor() { }

  ngOnInit() {
    this.cars = [{ 'brand': 'VW', 'year': 2012, 'color': 'Orange', 'vin': 'dsad231ff' },
    { 'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 'gwregre345' },
    { 'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 'h354htr' },
    { 'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 'j6w54qgh' },
    { 'brand': 'Mercedes', 'year': 1995, 'color': 'Orange', 'vin': 'hrtwy34' },
    { 'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 'jejtyj' },
    { 'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 'g43gr' },
    { 'brand': 'Jaguar', 'year': 2013, 'color': 'Orange', 'vin': 'greg34' },
    { 'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 'h54hw5' },
    { 'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': '245t2s' }];
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
    this.columnAttribute = [
      { name: 'field', type: 'string', default: 'null', description: '表示行数据的属性。'},
      { name: 'sortField', type: 'string', default: 'null', description: '配置表格排序属性的字段，默认为field的值。'},
      { name: 'filterField', type: 'string', default: 'null', description: '配置表格过滤属性的字段，默认为field的值。'},
      { name: 'header', type: 'string', default: 'null', description: '配置头部文字属性。'},
      { name: 'footer', type: 'string', default: 'null', description: '配置底部文字属性。'},
      { name: 'sortable', type: 'any', default: 'false', description: '配置具体某一列是否可以排序属性。'},
      { name: 'sortFunction', type: 'function', default: 'null', description: '自定义排序函数。'},
      { name: 'editable', type: 'boolean', default: 'false', description: '定义某一列是否可以编辑属性。'},
      { name: 'filter', type: 'boolean', default: 'false', description: '定义某一列是否可以配置过滤器。'},
      { name: 'filterMatchMode', type: 'string', default: 'null', description: '定义过滤器配置，可选值包括 "startsWith"（开头匹配）、"contains"（包含值匹配）、"endsWidth"（结尾匹配）、"equals"（值等匹配）、"notEquals"（非值等匹配）以及"in"（值包括匹配）。'},
      { name: 'filterType', type: 'string', default: 'text', description: '配置默认过滤器所在输入框的输入类型。'},
      { name: 'filterPlaceholder', type: 'string', default: 'null', description: '配置过滤器输入框的 placeholder。'},
      { name: 'filterMaxlength', type: 'number', default: 'null', description: '配置过滤器所允许输入的最大字符个数。'},
      { name: 'rowspan', type: 'string', default: 'null', description: '定义分组时需要合并的行数。'},
      { name: 'colspan', type: 'string', default: 'null', description: '定义分组时需要合并的列数。'},
      { name: 'style', type: 'object', default: 'null', description: 'p-column 组件的行内样式。'},
      { name: 'styleClass', type: 'string', default: 'null', description: 'p-column 组件的样式类。'},
      { name: 'tableStyle', type: 'string', default: 'null', description: '表格元素的行内样式。'},
      { name: 'tableStyleClass', type: 'string', default: 'null', description: '表格元素的样式类。'},
      { name: 'hidden', type: 'boolean', default: 'false', description: '控制某一列的显示与隐藏。'},
      { name: 'expander', type: 'boolean', default: 'false', description: '控制某一行是否可以展开与折叠。'},
      { name: 'selectionMode', type: 'string', default: 'null', description: '定义列元素的选择模式，可选值有"single"（单选）和"multiple"（多选）。'},
      { name: 'frozen', type: 'boolean', default: 'false', description: '定义某一列是否可以固定（横向滚动条）。'},
      { name: 'showDetail', type: 'boolean', default: 'false', description: '定义某一列鼠标悬浮后是否显示数据详情（不支持 ng-template 自定义的单元格，实现方式见【模板元素】模块示例），需结合styleClass="text-ellipsis"一起使用（常用于单元格数据过长，以单行省略号的形式展示，鼠标悬浮显示全部数据）；也可以直接使用styleClass="text-wrap"，此时数据会折行完整显示，不显示省略号。'}      
    ];
    this.tableProperties = [
      { name: 'value', type: 'array', default: 'null', description: '需要展示在表格中的数据集合。'},
      { name: 'headerRows', type: 'array', default: 'null', description: '定义表格头部分组的数组。'},
      { name: 'footerRows', type: 'array', default: 'null', description: '	定义表格底部分组的数组。'},
      { name: 'rows', type: 'number', default: 'null', description: '定义分页情况下每一页可以展示的数据条数。'},
      { name: 'paginator', type: 'boolean', default: 'false', description: '定义是否有分页效果。'},
      { name: 'totalRecords', type: 'number', default: 'null', description: '数据总条数。默认值为value属性的length。'},
      { name: 'pageLinks', type: 'number', default: 'null', description: '分页时，底部展示的可见页数。'},
      { name: 'rowsPerPageOptions', type: 'array', default: 'null', description: '整数的数组，用于修改每页可以展示的数据条数。'},
      { name: 'alwaysShowPaginator', type: 'boolean', default: 'true', description: '是否显示分页效果，哪怕是只有一页的情况下。'},
      { name: 'sortMode', type: 'string', default: 'single', description: '定义排序模式，单列（single）还是多列（multiple）。'},
      { name: 'sortField', type: 'string', default: 'null', description: '表格默认的排序字段的名称。'},
      { name: 'sortOrder', type: 'number', default: '1', description: '默认的排序方式。（1升序、-1降序）'},
      { name: 'defaultSortOrder', type: 'number', default: '1', description: '当一个未被排序的字段被用户操作导致排序发生时的默认排序方式。'},
      { name: 'multiSortMeta', type: 'array', default: 'null', description: '多列排序时使用，用于定义需要排序的列的集合。'},
      { name: 'rowGroupMode', type: 'string', default: 'null', description: '行分组模式，可选值有 subheader 和 rowspan。'},
      { name: 'groupField', type: 'string', default: 'null', description: 'subheader 行分组模式下，需要分组的字段名。'},
      { name: 'sortableGroupRow', type: 'boolean', default: 'true', description: '分组模式下，点击列头部是否触发排序效果。'},
      { name: 'responsive', type: 'boolean', default: 'false', description: '自适应屏幕属性，为true时，在手机等小屏设备上展示成列表的样子。'},
      { name: 'selectionMode', type: 'string', default: 'null', description: '行数据选择模式，可选值有 single 和 multiple。'},
      { name: 'headerCheckboxToggleAllPages', type: 'boolean', default: 'false', description: '该属性为true时，点击实现全选的效果，即使有分页，也会选中所有页面中的所有数据。'},
      { name: 'selection', type: 'any', default: 'null', description: '行数据选择模式下，用户选择的的行data。单选模式时存放的是对象，多选时存放的是选择的对象的数组。'},
      { name: 'editable', type: 'boolean', default: 'false', description: '表格子元素是否可编辑。'},
      { name: 'expandableRows', type: 'boolean', default: 'false', description: '指定数据是否可以分组。'},
      { name: 'expandedRows', type: 'array', default: 'null', description: '表格初始化时展开的分组。'},
      { name: 'rowExpandMode', type: 'string', default: 'multiple', description: '是否可以同时展开表格的多行数据，可选值有"single"（单行）和"multiple"（多行）。'},
      { name: 'rowGroupExpandMode', type: 'string', default: 'multiple', description: '是否可以同时展开表格的多组分组数据，可选值有"single"（单组）和"multiple"（多组）。'},
      { name: 'expandedIcon', type: 'string', default: 'fa-chevron-circle-down', description: '支持自定义展开折叠按钮。'},
      { name: 'collapsedIcon', type: 'string', default: 'fa-chevron-circle-right', description: '支持自定义展开折叠按钮。'},
      { name: 'globalFilter', type: 'any', default: 'null', description: '表格头部配置的全局数据过滤器。'},
      { name: 'filterDelay', type: 'number', default: '300', description: '执行数据过滤前的时间延迟，默认为300毫秒。'},
      { name: 'lazy', type: 'boolean', default: 'false', description: '表格数据的加载是否是懒加载模式。'},
      { name: 'resizableColumns', type: 'boolean', default: 'false', description: '声明表格元素是否可以通过拖拽改变某列的宽度。'},
      { name: 'columnResizeMode', type: 'string', default: 'fit', description: 'resizable模式下，表格整体宽度的适配模式，有"fit" 和 "expand"两种模式。'},
      { name: 'reorderableColumns', type: 'boolean', default: 'false', description: '声明是否可以通过拖拽改变列元素的排列顺序。'},
      { name: 'scrollable', type: 'boolean', default: 'false', description: '声明是否出现滚动条。'},
      { name: 'scrollHeight', type: 'string', default: 'null', description: '滚动视图的高度。'},
      { name: 'scrollWidth', type: 'string', default: 'null', description: '滚动视图的宽度。'},
      { name: 'virtualScroll', type: 'boolean', default: 'false', description: '拖动滚动条的时候，是否自动加载数据。'},
      { name: 'virtualScrollDelay', type: 'number', default: '500', description: '滚动加载数据时的延迟时间。'},
      { name: 'frozenValue', type: 'array', default: 'null', description: '垂直滚动时固定的表格数据。'},
      { name: 'style', type: 'string', default: 'null', description: '组件的内联样式。'},
      { name: 'styleClass', type: 'string', default: 'null', description: '组件的内联样式类。'},
      { name: 'exportFilename', type: 'string', default: 'download', description: '导出为文件时的文件名。'},
      { name: 'csvSeparator', type: 'string', default: ',', description: 'CSV文件的分隔符。'},
      { name: 'emptyMessage', type: 'string', default: 'No records found.', description: '没有数据的时候显示的默认值。'},
      { name: 'paginatorPosition', type: 'string', default: 'bottom', description: '分页条显示的位置，可选值有"top"、"bottom" 和 "both"。'},
      { name: 'rowHover', type: 'boolean', default: 'false', description: '添加行hover效果。（不需要selection模式）'},
      { name: 'filters', type: 'array', default: 'null', description: 'FilterMetadata对象数组。'},
      { name: 'dataKey', type: 'string', default: 'null', description: '数据集中的某条数据的唯一标识。'},
      { name: 'loading', type: 'boolean', default: 'false', description: '数据加载时是否显示一个加载的效果。'},
      { name: 'loadingIcon', type: 'string', default: 'fa-circle-o-notch', description: '数据加载时显示的加载按钮样式。'},
      { name: 'enableLoader', type: 'boolean', default: 'true', description: '懒加载模式下，是否启用框架内建的加载动画。'},
      { name: 'rowTrackBy', type: 'Function', default: 'null', description:
      'Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.'},
      { name: 'compareSelectionBy', type: 'string', default: 'deepEquals', description: 'Algorithm to define if a row is selected, valid values are "equals" that compares by reference and "deepEquals" that compares all fields.'},
      { name: 'first', type: 'number', default: '0', description: '页面展示的第一条数据。'},
      { name: 'immutable', type: 'boolean', default: 'true', description: '定义对数据的操作是在原始数据基础上，还是对原始数据copy一份，在copy基础上操作。'}
    ];
    // this.tableEvents = [
    //   { name: '', params: '',  description: ''},
    // ];
    this.tableMethods = [
      { name: 'reset', params: '-',  description: '重置表格的sort、filter 和 paginator状态。'},
      { name: 'exportCSV', params: '-',  description: '以CSV格式导出数据。'},
      { name: 'toggleRow', params: 'data',  description: '切换行数据的展开折叠状态。'}
    ];
    this.tableStyle = [
      { name: 'ui-datatable', element: 'Container element.'},
      { name: 'ui-datatable-header', element: 'Header section.'},
      { name: 'ui-datatable-footer', element: 'Footer section.'},
      { name: 'ui-column-title', element: 'Title of a column.'},
      { name: 'ui-sortable-column', element: 'Sortable column header.'},
      { name: 'ui-column-filter', element: 'Filter element in header.'},
      { name: 'ui-cell-data', element: 'Data cell in body.'},
      { name: 'ui-cell-editor', element: 'Input element for incell editing.'},
      { name: 'ui-datatable-scrollable-header', element: 'Container of header in a scrollable table.'},
      { name: 'ui-datatable-scrollable-body', element: 'Container of body in a scrollable table.'},
      { name: 'ui-datatable-scrollable-footer', element: 'Container of footer in a scrollable table.'},
      { name: 'ui-datatable-responsive', element: 'Container element of a responsive datatable.'},
      { name: 'ui-datatable-emptymessage', element: 'Cell containing the empty message.'},
      { name: 'ui-expanded-row', element: 'Expanded tr element.'},
      { name: 'ui-expanded-row-content', element: 'Next tr sibling of the expanded tr element.'}
    ];
    this.basicDemoCode = `
    export class DataTableDemo implements OnInit {

    cars: Car[];

    cols: any[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars); //从服务中获取数据
        // 此处示例使用的是Dummy数据
        this.cars = [{ 'brand': 'VW', 'year': 2012, 'color': 'Orange', 'vin': 'dsad231ff' },
           { 'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 'gwregre345' },
           { 'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 'h354htr' },
           { 'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 'j6w54qgh' },
           { 'brand': 'Mercedes', 'year': 1995, 'color': 'Orange', 'vin': 'hrtwy34' },
           { 'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 'jejtyj' },
           { 'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 'g43gr' },
           { 'brand': 'Jaguar', 'year': 2013, 'color': 'Orange', 'vin': 'greg34' },
           { 'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 'h54hw5' },
           { 'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': '245t2s' }];

        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    }
}`;
  }

}