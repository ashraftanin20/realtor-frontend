import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HausingService } from 'src/app/services/hausing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

 
 properties: IProperty[] = [];
 filteredProperties: IProperty[] = [];
  constructor(private route: ActivatedRoute, private hausingService: HausingService) {  
    this.hausingService.getAllProperties().then((plist: IProperty[]) => {
      this.properties = plist;
      this.filteredProperties = plist;
    })
    
  }
}
