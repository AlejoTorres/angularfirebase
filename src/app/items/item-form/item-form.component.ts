import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';

import { ItemService } from '../../service/item.service';
import { Item } from '../../model/item';

@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {

  item: Item = new Item();

  constructor(private itemService: ItemService) { }

  createItem() {
    this.itemService.createItem(this.item)
    this.item = new Item() // reset item
  }

}
