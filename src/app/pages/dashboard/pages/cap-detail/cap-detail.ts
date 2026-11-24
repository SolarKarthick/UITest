import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DetailPageHeader } from '../../components/detail-page-header/detail-page-header';
import { DEMO } from '../../data/investment-dashboard.mock';

@Component({
  selector: 'app-cap-detail',
  standalone: true,
  imports: [CommonModule, TableModule, DetailPageHeader],
  templateUrl: './cap-detail.html',
  styleUrl: './cap-detail.scss'
})
export class CapDetail {
  data: any = DEMO;

  get percentCredited(): any {
    if (!this.data.maxPotential) return 0;
    return Math.round((this.data.rewardsReceived / this.data.maxPotential) * 1000) / 10;
  }
}
