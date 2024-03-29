import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BusReportComponent } from './bus-report/bus-report.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { CustomMaterialModule } from './custom-material.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule, CustomMaterialModule ],
  declarations: [ AppComponent, BusReportComponent, BusListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
