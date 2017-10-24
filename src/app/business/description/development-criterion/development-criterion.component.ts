import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-development-criterion',
  templateUrl: './development-criterion.component.html',
  styleUrls: ['./development-criterion.component.scss']
})
export class DevelopmentCriterionComponent implements OnInit {

  commands: any[];
  angularCLI = `
  {
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "project": {
      "name": "kyee_nextframework_portalface_quickstart" // 使用 angular-cli 的“ng new PROJECT-NAME”命令快速创建一个项目时，自动生成的。建议使用目前公司通用的小写、下划线链接的方式，需手动修改（默认为全小写、中划线链接）
    },
    "apps": [
      {
        "root": "src", // 指示 angular 工程的根目录，默认为 src 文件夹（可以自定义文件夹名）
        "outDir": "dist", // 使用 build 命令后，文件编译后的输出目录，默认为 dist（可以自定义文件夹名）
        "assets": [ // 静态资源文件夹，build 时会原封不动拷贝到上述 outDir 文件夹下
          "assets",
          "favicon.ico"
        ],
        "index": "index.html", // 指定项目的唯一入口（不需要改动）
        "main": "main.ts", // 指定引导应用的的 main 入口文件，即 src 文件件下面的 main.ts 文件（不需要改动）
        "polyfills": "polyfills.ts", // 为兼容各浏览器指定的填充库（不需要改动）
        "tsconfig": "tsconfig.app.json",
        "prefix": "kyee", // 使用“ng g”命令时自动为 selector 元数据的值添加的前缀名，（默认为‘app’，可以根据各业务需求修改，小写、中划线链接）
        "styles": [ // 这个数组指示全局范围的样式文件，把文件声明在这个数组中，其中定义的样式就可以作用到全局范围。
          "../node_modules/font-awesome/css/font-awesome.min.css",
          "../node_modules/primeng/resources/primeng.min.css",
          "assets/frame/fonticon/fonticon.css",
          "styles.css"
        ],
        "scripts": [ // 类似于上述 styles 数组，scripts 数组也可以添加一些全局用的模块，例如 jQuery。angular 在 build 的时候会将这些文件统一打包，这样就不需要在“index.html”中额外引入了。
          "../node_modules/chart.js/dist/Chart.js"
        ],
        "environmentSource": "environments/environment.ts", // 基础环境配置（不必关心）
        "environments": { // 这个指示配置各种环境的文件，如常见的开发环境和生产环境（不必关心）
          "dev": "environments/environment.ts",
          "prod": "environments/environment.prod.ts"
        }
      }
    ],
    "lint": [
      {
        "project": "src/tsconfig.app.json"
      }
    ],
    "defaults": { // 下列是一些执行“ng g”命令时声明的一些默认值
      "styleExt": "scss", // 默认生成的样式文件后缀名，我们目前统一使用.scss文件编写样式
      "component": {
        "spec": false // 是否生成默认的测试文件，默认为true。（因为我们目前不考虑自动化测试，所以将其设置为false）
      },
      "directive": {
        "spec": false // 同上
      },
      "guard": {
        "spec": false // 同上
      },
      "interface": {
      },
      "module": {
        "spec": false // 同上
      },
      "pipe": {
        "spec": false // 同上
      },
      "service": {
        "spec": false // 同上
      },
      "serve": {
        "port": 2060 // 开发模式下，默认的端口号，可以根据自身情况设置。
      }
    }
  }
  `;
  constructor() { }

  ngOnInit() {
    this.commands = [
      { 'name': 'Component（组件）', 'command': 'ng g component my-new-component' },
      { 'name': 'Directive（指令）', 'command': 'ng g directive my-new-directive' },
      { 'name': 'Pipe（管道）', 'command': 'ng g pipe my-new-pipe' },
      { 'name': 'Service（服务）', 'command': 'ng g service my-new-service' },
      { 'name': 'Class（类）', 'command': 'ng g class my-new-class' },
      { 'name': 'Guard（拦截器）	', 'command': 'ng g guard my-new-guard' },
      { 'name': 'Interface（接口）', 'command': 'ng g interface my-new-interface' },
      { 'name': 'Enum（枚举）', 'command': 'ng g enum my-new-enum' },
      { 'name': 'Module（模块）', 'command': 'ng g module my-module' }
    ];
  }

}
