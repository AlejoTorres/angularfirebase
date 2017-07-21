import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemListComponent } from './items/item-list/item-list.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: "items", component: ItemListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
