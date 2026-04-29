import { Component, EventEmitter, Input, Output } from '@angular/core';
import {dashboardTableRowData} from './../../interfaces/dashboard-table'; 
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-dashboard-table',
  imports: [NgForOf],
  templateUrl: './dashboard-table.html',
  styleUrl: './dashboard-table.scss',
})
export class DashboardTable {

@Input() data: dashboardTableRowData[]|null = [];
@Output() rowClicked = new EventEmitter<dashboardTableRowData|null>();  

}
