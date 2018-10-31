import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Component, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { CardComponent } from './card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

const appRoutes: Routes = [
  {
    path: 'agenda',
    component: AppComponent,
    data: { title: 'Agenda List' }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DragAndDropModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [
    AppComponent, 
  ]
})
export class AppModule {}
