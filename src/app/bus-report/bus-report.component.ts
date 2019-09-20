import { Component, OnInit, Input } from '@angular/core';

import { BusReport } from './bus-report';

@Component({
  selector: 'app-bus-report',
  templateUrl: './bus-report.component.html',
  styleUrls: ['./bus-report.component.css']
})
export class BusReportComponent implements OnInit {
  @Input() BusReport: BusReport;
  constructor() { }

  ngOnInit() {
  }

}