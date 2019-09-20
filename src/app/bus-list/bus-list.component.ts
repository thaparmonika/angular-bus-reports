import { Component, OnInit } from '@angular/core';

import { BusList } from './bus-list';
import { BusDataService } from '../bus-data.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  providers: [BusDataService],
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  busData: BusList[];

  constructor(private busDataService: BusDataService) {}

  ngOnInit() {
    this.getBusData();
  }
 getBusData(): void {
    this.busDataService.getBusData().subscribe(busData => (this.busData = busData));
  }
}