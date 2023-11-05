import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Birla Hause",
      "Type": "Hause",
      "Price": 120000
    },
    {
      "Id": 2,
      "Name": "Summer Villa",
      "Type": "Villa",
      "Price": 130000
    },
    {
      "Id": 3,
      "Name": "Lovely Apartment",
      "Type": "Flat",
      "Price": 120000
    },
    {
      "Id": 1,
      "Name": "3 Rooms Apartment",
      "Type": "Flat",
      "Price": 150000
    },
    {
      "Id": 4,
      "Name": "Busniss Office",
      "Type": "Flat",
      "Price": 120000
    },
    {
      "Id": 5,
      "Name": "Shop in the Center",
      "Type": "Shop",
      "Price": 130000
    },
    {
      "Id": 6,
      "Name": "Stock Passage",
      "Type": "Stock",
      "Price": 180000
    },
  ]
  constructor() {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
