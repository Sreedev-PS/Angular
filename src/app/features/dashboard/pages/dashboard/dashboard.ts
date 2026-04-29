import { Component } from '@angular/core';
import { DashboardTable } from "../../components/dashboard-table/dashboard-table";
import { dashboardTableRowData } from '../../interfaces/dashboard-table';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardTable],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  selectedRow: dashboardTableRowData | null = null

  rowClickedEvent(event:dashboardTableRowData|null){
    this.selectedRow = event;
  }

}
