import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgIcon } from '../../../../shared/components/svg-icon/svg-icon';
import { DEMO } from '../../data/investment-dashboard.mock';

@Component({
  selector: 'app-earnings-rewards-widget',
  standalone: true,
  imports: [CommonModule, RouterModule, SvgIcon],
  templateUrl: './earnings-rewards-widget.html',
  styleUrl: './earnings-rewards-widget.scss'
})
export class EarningsRewardsWidget {
  data: any = DEMO;

  cards: any = [
    {
      key: 'roi',
      label: 'Total ROI Earnings',
      value: this.data.totalRoiEarnings,
      svg: 'chart-bar',
      note: 'Credited toward max potential cap'
    },
    {
      key: 'referral',
      label: 'Total Referral Earnings',
      value: this.data.totalReferralEarnings,
      svg: 'users',
      note: 'All time referral income'
    },
    {
      key: 'instant',
      label: 'Instant Referral Reward',
      value: this.data.instantReferralReward,
      svg: 'bolt',
      note: '20% of eligible referral income'
    },
    {
      key: 'welcome',
      label: 'Welcome Bonus',
      value: this.data.welcomeBonus,
      svg: 'gift',
      note: 'Credited toward max potential cap'
    },
    {
      key: 'max',
      label: 'Maximum Potential Return',
      value: this.data.maxPotential,
      svg: 'chart',
      note: '2× pay-in · $2516 remaining'
    }
  ];
}
