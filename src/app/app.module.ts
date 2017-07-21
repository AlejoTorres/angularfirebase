import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemDeComponent } from './items/item-de/item-de.component';
import { ItemFormComponent } from './items/item-form/item-form.component';
export const firebaseConfig = environment.firebaseConfig;

import { ItemService } from './service/item.service'

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemDeComponent,
    ItemFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
