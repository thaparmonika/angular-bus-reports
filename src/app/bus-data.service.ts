import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BusList } from './bus-list/bus-list';

@Injectable()
export class BusDataService {

  busDataUrl = 'assets/bus-services-data.json';

  constructor(private http: HttpClient) { }

  getBusData() {
    return this.http.get<BusList[]>(this.busDataUrl);
  }
}