import { Component, OnInit } from '@angular/core';

import { FirebaseListObservable } from 'angularfire2/database'

import { ItemService } from '../../service/item.service'
import { Item } from '../../model/item'

import { ItemDeComponent } from '../item-de/item-de.component'
import { ItemFormComponent } from '../item-form/item-form.component'

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  public items: FirebaseListObservable<Item[]>;

  constructor(private itemService: ItemService) {

  }

  ngOnInit() {
    this.items = this.itemService.getItemsListQuery({limitToLast: 5});
  }

  deleteItems(){
    this.itemService.deleteAll();
  }
}
