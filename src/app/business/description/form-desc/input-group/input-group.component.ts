import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kyee-input-group-desc',
  templateUrl: './input-group.component.html',
  styleUrls: ['../../description.common.scss', '../form-desc.component.scss', './input-group.component.scss']
})
export class InputGroupComponent implements OnInit {
  tsDemo: string;
  constructor() { }

  ngOnInit() {
    this.tsDemo = `
export class InputGroupComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}`;
  }

}
