import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DetailPageHeader } from '../../components/detail-page-header/detail-page-header';
import { DEMO } from '../../data/investment-dashboard.mock';

@Component({
  selector: 'app-referral-detail',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, DetailPageHeader],
  templateUrl: './referral-detail.html',
  styleUrl: './referral-detail.scss'
})
export class ReferralDetail {
  data: any = DEMO;
  copied: any = false;

  statusSeverity(status: any): any {
    if (status === 'Active') return 'success';
    if (status === 'Pending') return 'warn';
    return 'secondary';
  }

  copyLink(): void {
    navigator.clipboard?.writeText(this.data.referralLink).then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 1600);
    });
  }
}
