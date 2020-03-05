import {Component, Input, OnInit} from '@angular/core';
import {IProperties} from '../../../../../../data/schema/Interfaces/Editor/IProperty';
import {PropertyTypes} from '../../../../../../data/schema/Enums/property-types.enum';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css']
})
export class PropertiesListComponent implements OnInit {

  @Input() properties: IProperties;

  public propertyType = PropertyTypes;

  public objectKeys = Object.keys;

  constructor() { }

  ngOnInit() {
  }
}
