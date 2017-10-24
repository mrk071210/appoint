import { Component, OnInit } from '@angular/core';

import { TreeNode } from '../../../widgets';
import { DemoDataService } from '../data';

@Component({
  selector: 'kyee-example-dashboard',
  templateUrl: './example-dashboard.component.html',
  styleUrls: ['./example-dashboard.component.scss']
})
export class ExampleDashboardComponent implements OnInit {
condition: boolean;
items;
selectedCars3;
selectedCar2;
date1;
date2;


    displayDialog: boolean;
    cars;
    car;
    selectedCar;
    newCar: boolean;
    dialogName: string;


    filesTree1: TreeNode[];
    filesTree2: TreeNode[];
    
    selectedFiles1: TreeNode[];
  constructor(private demoDataService: DemoDataService) { }

  ngOnInit() {
    this.cars = this.demoDataService.getTableData();
    this.items = this.demoDataService.getMenueData();
    this.filesTree1 = this.demoDataService.getTreeData();
    this.filesTree2 = this.filesTree1;
  }

    handleClose(e) {
    this.condition = !this.condition;
        console.log(e);
    if(this.condition)
        e.close();
    } 
    
    showDialogToAdd() {
        this.newCar = true;
        this.dialogName = "新建";
        this.car = {};
        this.displayDialog = true;
    }
      
    showDialogToDelete() {
        for(let i = 0; this.selectedCars3 && i < this.selectedCars3.length; i++) {
            let index = this.cars.indexOf(this.selectedCars3[i]);
            this.cars = this.cars.filter((val,i) => i!=index);
        }

        this.selectedCars3 = [];
    } 

    save() {
        let cars = [...this.cars];
        if(this.newCar)
            cars.push(this.car);
        else
            cars[this.findSelectedCarIndex()] = this.car;

        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }
    
    delete() {
        let index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val,i) => i!=index);
        this.car = null;
        this.displayDialog = false;
    }    
    
    onRowSelect() {
        this.newCar = false;
        this.dialogName = "编辑";
        this.car = this.cloneCar(this.selectedCars3[0]);
        this.displayDialog = true;
    }
    
    cloneCar(c) {
        let car = {};
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    
    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCars3[0]);
    }


    expandAll(){
        this.filesTree2.forEach( node => {
            this.expandRecursive(node, true);
        } );
    }

    collapseAll(){
        this.filesTree2.forEach( node => {
            this.expandRecursive(node, false);
        } );
    }
        
    private expandRecursive(node: TreeNode, isExpand: boolean) {
        node.expanded = isExpand;
        if(node.children) {
            node.children.forEach( childNode => {
                this.expandRecursive(childNode, isExpand);
            });
        }
    }
}

