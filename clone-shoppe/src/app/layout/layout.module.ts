import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
