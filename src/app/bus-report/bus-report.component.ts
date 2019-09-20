import { Component, OnInit, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import { BusReport } from './bus-report';

@Component({
  selector: 'app-bus-report',
  templateUrl: './bus-report.component.html',
  styleUrls: ['./bus-report.component.css']
})
export class BusReportComponent implements OnInit {
  @Input() BusReport: BusReport;
  displayedColumns: string[] = ['busId', 'routeVariant', 'deviationFromTimetable'];
  constructor(private _snackBar: MatSnackBar) {}
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  ngOnInit() {
  }

}