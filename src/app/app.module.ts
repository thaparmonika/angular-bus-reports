import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BusReportComponent } from './bus-report/bus-report.component';
import { BusListComponent } from './bus-list/bus-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BusReportComponent, BusListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
