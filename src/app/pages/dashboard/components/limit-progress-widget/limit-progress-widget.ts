import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MeterGroupModule } from 'primeng/metergroup';
import { DEMO } from '../../data/investment-dashboard.mock';

@Component({
  selector: 'app-limit-progress-widget',
  standalone: true,
  imports: [CommonModule, RouterModule, MeterGroupModule],
  templateUrl: './limit-progress-widget.html',
  styleUrl: './limit-progress-widget.scss'
})
export class LimitProgressWidget {
  data: any = DEMO;

  totalDeposits: any = this.data.totalDeposits;
  maxPotential: any = this.data.maxPotential;
  rewardsReceived: any = this.data.rewardsReceived;
  withdrawn: any = this.data.totalWithdrawals;
  remaining: any = this.data.remainingPotential;

  meterItems: any = [
    {
      label: 'Rewards received',
      value: this.toPercent(this.rewardsReceived),
      color: '#6366f1',
      amount: this.rewardsReceived
    },
    {
      label: 'Pay-out',
      value: this.toPercent(this.withdrawn),
      color: '#8b5cf6',
      amount: this.withdrawn
    },
    {
      label: 'Remaining potential',
      value: this.toPercent(this.remaining),
      color: '#38bdf8',
      amount: this.remaining
    }
  ];

  progressMeterItems: any = this.meterItems.filter((item: any) => item.label !== 'Pay-out');

  toPercent(amount: any): any {
    if (!this.maxPotential) return 0;
    return Math.round((Number(amount) / this.maxPotential) * 1000) / 10;
  }

  formatPercent(amount: any): any {
    return `${this.toPercent(amount)}%`;
  }
}
