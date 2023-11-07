import { Component, OnInit } from '@angular/core';
import { HausingService } from 'src/app/services/hausing.service';
import { IProperty } from '../IProperty.interface';
import { ExpansionCase } from '@angular/compiler';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

 properties: IProperty[] = [];
  constructor(private hausingService: HausingService) {
    this.hausingService.getAllProperties().then((plist: IProperty[]) => {
      this.properties = plist;
    })
  }
}
