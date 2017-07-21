import { Component, OnInit, Input } from '@angular/core';

import { ItemService } from '../../service/item.service'
import { Item } from '../../model/item'

@Component({
  selector: 'item-de',
  templateUrl: './item-de.component.html',
  styleUrls: ['./item-de.component.css']
})
export class ItemDeComponent {
  @Input() item: Item;

  constructor(private itemService: ItemService) {

  }

  ngOnInit() {
  }

  updateTimeStamp(){
    let date = new Date();
    this.itemService.updateItem(this.item.$key, { timeStamp: date });
  }

  updateActive(value: boolean) {
    this.itemService.updateItem(this.item.$key, { active: value })
  }

  deleteItem(){
    this.itemService.deleteItem(this.item.$key);
  }

}
