import { BusReport } from '../bus-report/bus-report';
export interface BusList {
  organisation: string,
  date: Date,
  busData: BusReport[]
}
