import { Component } from '@angular/core';

@Component({
  selector: "property-card",
  templateUrl: 'Property-card.component.html',
  //template:`<h1>This is property Card component</h1>`,
  styleUrls: ['Property-card.component.css']

})
export class PropertyCardComponent{

  Property : any = {
    "Id":1,
    "Name": "Batla House",
    "Type":"House",
    "Price": 12000


  }
}
