import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgIcon } from '../../../../shared/components/svg-icon/svg-icon';
import { DEMO } from '../../data/investment-dashboard.mock';

@Component({
  selector: 'app-referral-overview-widget',
  standalone: true,
  imports: [CommonModule, RouterModule, SvgIcon],
  templateUrl: './referral-overview-widget.html',
  styleUrl: './referral-overview-widget.scss'
})
export class ReferralOverviewWidget {
  data: any = DEMO;

  cards: any = [
    {
      key: 'total',
      label: 'Total Referral Users',
      value: this.data.totalReferralUsers,
      svg: 'user-plus',
      note: `Today's referral income $${this.data.todayReferralIncome}`
    },
    {
      key: 'active',
      label: 'Active Referral Users',
      value: this.data.activeReferralUsers,
      svg: 'verified',
      note: `Total $${this.data.totalReferralEarnings} · Instant $${this.data.instantReferralReward}`
    }
  ];
}
