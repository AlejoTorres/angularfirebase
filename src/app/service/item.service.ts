import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Item } from '../model/item'

@Injectable()
export class ItemService {
  items: FirebaseListObservable<Item[]> = null; //  list of objects
  item: FirebaseObjectObservable<Item> = null; //   single object
  userId: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth ) {
    this.afAuth.authState.subscribe(user=>{
      if(user)
        this.userId = user.uid;
    });
  }

  getItemsList(): FirebaseListObservable<Item[]>{
    if(!this.userId) return;
    this.items = this.db.list(`items/`); //${this.userId}

    return this.items; 
  }

  getItemsListQuery(query={}): FirebaseListObservable<Item[]> {
    this.items = this.db.list(`items/`, {
      query: query
    });
    return this.items
  }
  // Return a single observable item
  getItem(key: string): FirebaseObjectObservable<Item> {
    const itemPath =  `items/${key}`;
    this.item = this.db.object(itemPath)
    return this.item
  }

  createItem(item: Item){
    this.items.push(item).catch(error => this.handleError(error))
    /*item.userId = this.userId;
    this.items.push(item);*/
  }

   // Update an existing item
  updateItem(key: string, value: any): void {
    this.items.update(key, value)
      .catch(error => this.handleError(error))
  }

  // Deletes a single item
  deleteItem(key: string): void {
      this.items.remove(key)
        .catch(error => this.handleError(error))
  }

  // Deletes the entire list of items
  deleteAll(): void {
      this.items.remove()
        .catch(error => this.handleError(error))
  }

  join(itemKey){
    const data = {[this.userId]: true};
    const members = this.db.object(`items/${itemKey}`);
    members.update(data);
  }

  leave(itemKey){
    const members = this.db.object(`items/${itemKey}/members/${this.userId}`);
    members.remove();
  }

  // Default error handling for all actions
  private handleError(error) {
    console.log(error)
  }

}
