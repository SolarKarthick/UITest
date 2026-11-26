import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DetailPageHeader } from '../../components/detail-page-header/detail-page-header';
import { DEMO } from '../../data/investment-dashboard.mock';

@Component({
  selector: 'app-earnings-detail',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, DetailPageHeader],
  templateUrl: './earnings-detail.html',
  styleUrl: './earnings-detail.scss'
})
export class EarningsDetail {
  data: any = DEMO;

  statusSeverity(status: any): any {
    if (status === 'Active') return 'success';
    if (status === 'Pending') return 'warn';
    return 'secondary';
  }
}
