import { NgModule } from '@angular/core';
import { EntityListComponent } from './entity-list.component';
import { MatList, MatListItem } from '@angular/material/list';
import { MatRippleModule } from '@angular/material';
import { AsyncPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule,
    MatRippleModule,
  ],
  declarations: [
    EntityListComponent,
    MatList, MatListItem,

  ],
  providers: [
    AsyncPipe,
  ],
  exports: [
    EntityListComponent,
    MatList, MatListItem,
  ]
})
export class EntityListModule { }
