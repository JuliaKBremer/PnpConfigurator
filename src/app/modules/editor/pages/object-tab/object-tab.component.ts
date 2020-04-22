import { Component, OnInit } from '@angular/core';
import {ObjectTabService} from './object-tab.service';

@Component({
  selector: 'app-object-tab',
  templateUrl: './object-tab.component.html',
  styleUrls: ['./object-tab.component.css']
})
export class ObjectTabComponent implements OnInit {

  constructor(public objectTabService: ObjectTabService) { }

  ngOnInit() {
    this.objectTabService.UpdateTemplatesEnum();
  }
}
